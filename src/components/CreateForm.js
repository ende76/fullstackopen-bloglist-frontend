import React from 'react'

export default ({ createTitle, changeTitleHandler, createAuthor, changeAuthorHandler, createUrl, changeUrlHandler, submitHandler }) =>
    <section>
        <h2>create new</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="blog-title">title</label>
                <input 
                    id="blog-title" 
                    type="text" 
                    value={createTitle} 
                    onChange={changeTitleHandler} 
                />
            </div>
            <div>
                <label htmlFor="blog-author">author</label>
                <input 
                    id="blog-author" 
                    type="text" 
                    value={createAuthor} 
                    onChange={changeAuthorHandler} 
                />
            </div>
            <div>
                <label htmlFor="blog-url">url</label>
                <input 
                    id="blog-url" 
                    type="text" 
                    value={createUrl} 
                    onChange={changeUrlHandler} 
                />
            </div>
            <button type="submit">create</button>
        </form>
    </section>