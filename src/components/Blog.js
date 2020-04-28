import React, { useState } from 'react'
const Blog = ({ blog, updateBlog, removeBlog, canRemove }) => {
  const [ showDetails, setShowDetails ] = useState(false);

  const handleClickLike = (e) => updateBlog({ ...blog, likes: blog.likes + 1 })

  const handleClickRemove = (e) => removeBlog(blog)

  return (
    <section className={"blog" + (canRemove(blog) ? " can-remove" : "")}>
      <div>
  {blog.title} {blog.author} <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "hide" : "view"}</button>
      </div>
      { !showDetails ? null :
        <div>
          <p>{blog.url}</p>
          <p>likes {blog.likes} <button onClick={handleClickLike}>like</button></p>
          <p>{blog.user.name}</p>
          {!canRemove(blog) ? null : <p><button onClick={handleClickRemove}>remove</button></p>}
        </div>
      }
    </section>
  )
}
export default Blog
