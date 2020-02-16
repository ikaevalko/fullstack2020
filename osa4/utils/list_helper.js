const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  const likes = blogs.map(blog => blog.likes)

  return blogs[likes.indexOf(Math.max(...likes))]
}

const mostBlogs = (blogs) => {

  if (blogs.length <= 0) {
    return undefined
  }

  let blogSums = []

  for (b = 0; b < blogs.length; b++) {

    if (blogSums.length <= 0) {
      blogSums = blogSums.concat({
        author: blogs[b].author, 
        amountOfBlogs: 1
      })
      continue;
    }

    for (s = 0; s < blogSums.length; s++) {
      
      if (blogSums[s].author === blogs[b].author) {

        const replacedAuthor = {
          author: blogSums[s].author, 
          amountOfBlogs: blogSums[s].amountOfBlogs + 1
        }

        blogSums = blogSums.filter(item => item.author !== replacedAuthor.author)
        blogSums = blogSums.concat(replacedAuthor)
        break;
      }

      if (s >= blogSums.length - 1) {
        blogSums = blogSums.concat({
          author: blogs[b].author, 
          amountOfBlogs: 1
        })
        break;
      }
    }
  }

  let authorWithMostBlogs = undefined

  for (i = 0; i < blogSums.length; i++) {
    if (authorWithMostBlogs === undefined) {
      authorWithMostBlogs = blogSums[i]
    }

    if (authorWithMostBlogs.amountOfBlogs < blogSums[i].amountOfBlogs) {
      authorWithMostBlogs = blogSums[i]
    }
  }

  return authorWithMostBlogs
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}