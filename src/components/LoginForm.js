import React from 'react';

export default ({submitHandler, username, changeUsernameHandler, password, changePasswordHandler}) => 
    <section>
        <h2>login</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="login-username">username</label>
                <input id="login-username" type="text" value={username} onChange={changeUsernameHandler} />
            </div>
            <div>
                <label htmlFor="login-password">password</label>
                <input id="login-password" type="password" value={password} onChange={changePasswordHandler} />
            </div>
            <button type="submit">login</button>
        </form>
    </section>
