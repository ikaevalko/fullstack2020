import PropTypes from 'prop-types'
import Togglable from './Togglable'
const React = require('react')

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      {blog.title} {blog.author}
      <Togglable
        showButtonLabel='view'
        hideButtonLabel='hide'>
        <div>
          {blog.url}<br/>
          likes {blog.likes}<br/>
          {blog.user ? blog.user.name : ''}
        </div>
      </Togglable>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog