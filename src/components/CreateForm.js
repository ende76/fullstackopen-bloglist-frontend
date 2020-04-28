import React, { useState } from 'react'

export default ({ createBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const submitHandler = async e => {
        e.preventDefault();
        if (await createBlog({ title, author, url })) {
            setTitle('')
            setAuthor('')
            setUrl('')
        } 
    }

    return (
        <section>
            <h2>create new</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="blog-title">title</label>
                    <input 
                        id="blog-title" 
                        type="text" 
                        value={title} 
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="blog-author">author</label>
                    <input 
                        id="blog-author" 
                        type="text" 
                        value={author} 
                        onChange={({ target }) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="blog-url">url</label>
                    <input 
                        id="blog-url" 
                        type="text" 
                        value={url} 
                        onChange={({ target }) => setUrl(target.value)}
                    />
                </div>
                <button type="submit">create</button>
            </form>
        </section>
    )
}