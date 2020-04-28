import React, { useState } from 'react';

export default ({ loginUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async e => {
        e.preventDefault();

        if (await loginUser({ username, password })) {
            setUsername('')
            setPassword('')      
        }
    };

    return (
        <section>
            <h2>login</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="login-username">username</label>
                    <input 
                        id="login-username" 
                        type="text" 
                        value={username}
                        onChange={({ target }) => setUsername(target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="login-password">password</label>
                    <input 
                        id="login-password" 
                        type="password" 
                        value={password} 
                        onChange={({ target }) => setPassword(target.value)} 
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </section>
    )
}
