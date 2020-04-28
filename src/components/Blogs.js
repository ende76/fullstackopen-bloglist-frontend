import React from 'react'
import Blog from './Blog'

export default ({ blogs, updateBlog, removeBlog, canRemove }) =>
    <section>
        <h2>blogs</h2>
        {blogs.sort((b0, b1) => b1.likes - b0.likes).map(blog =>
            <Blog 
                key={blog.id} 
                blog={blog} 
                updateBlog={updateBlog} 
                removeBlog={removeBlog}
                canRemove={canRemove}
            />
        )}
    </section>
