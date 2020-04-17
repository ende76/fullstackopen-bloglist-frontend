import React from 'react'

export default ({ user: { name }, clickLogoutHandler }) => 
    <section>
        <span>logged in as </span><span className="user-name">{name}</span>
        <button onClick={clickLogoutHandler}>logout</button>
    </section>