import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

let component

const blog = {
  title: 'test title',
  author: 'test author',
  url: 'test url',
  likes: 0
}

beforeEach(() => {
  component = render(
    <Blog blog={blog} />
  )
})

test('at start the children are not displayed', () => {
  const div = component.container.querySelector('.togglableContent')

  expect(div).toHaveStyle('display: none')
})

test('after clicking the button, children are displayed', () => {
  const button = component.getByText('view')
  fireEvent.click(button)

  const div = component.container.querySelector('.togglableContent')
  expect(div).not.toHaveStyle('display: none')
})