const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})

  for (i = 0; i < 3; i++) {
    await new Blog({
      title: 'test_title_'+i,
      author: 'test_author_'+i,
      url: 'test_url_'+i,
      likes: i
    }).save()
  }
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('blog identifier name is id', async () => {
  const blog = await Blog.findOne({title: 'test_title_0'})
  expect(blog.id).toBeDefined()
})

test('a valid blog can be added', async () => {
  const sizeBeforePost = await Blog.countDocuments({})

  const newBlog = {
    title: 'new_title',
    author: 'new_author',
    url: 'new_url',
    likes: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  const titles = response.body.map(r => r.title)

  expect(response.body.length).toBe(sizeBeforePost + 1)
  expect(titles).toContain('new_title')
})

test('likes are set to zero if undefined', async () => {
  const newBlog = {
    title: 'new_title',
    author: 'new_author',
    url: 'new_url',
    likes: undefined
  }

  await api
    .post('/api/blogs')
    .send(newBlog)

  const addedBlog = await Blog.findOne({title: 'new_title'})

  expect(addedBlog.likes).toBe(0)
})

test('respond with 400 Bad request if title or url of new blog undefined', async () => {
  const newBlog = {
    title: undefined,
    author: 'new_author',
    url: undefined,
    likes: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})