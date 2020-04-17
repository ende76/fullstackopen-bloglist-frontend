import React from 'react'
import Blog from './Blog'

export default ({ blogs }) =>
    <section>
        <h2>blogs</h2>
        {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
        )}
    </section>
