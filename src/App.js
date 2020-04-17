import React, { useState, useEffect } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import SuccessMessage from './components/SuccessMessage'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import CreateForm from './components/CreateForm'
import LoginStatus from './components/LoginStatus'
import blogService from './services/blogs'
import loginService from './services/login'

const LOGGED_BLOG_LIST_USER = 'loggedBlogListUser'

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  const [createTitle, setCreateTitle] = useState('')
  const [createAuthor, setCreateAuthor] = useState('')
  const [createUrl, setCreateUrl] = useState('')

  const fetchBlogs = async () => setBlogs(await blogService.getAll())

  useEffect(() => {
    fetchBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJson = localStorage.getItem(LOGGED_BLOG_LIST_USER);

    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson) 
      setUser(user)
      setToken(user.token)
    }
  }, [])

  const submitLoginHandler = async e => {
    e.preventDefault()
    try {
      const user = await loginService.login({username, password})

      window.localStorage.setItem(LOGGED_BLOG_LIST_USER, JSON.stringify(user))

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const submitCreateHandler = async e => {
    e.preventDefault()
    try {
      await blogService
        .create({
          title: createTitle,
          author: createAuthor,
          url: createUrl,
        }, token)

      setSuccessMessage(`added new blog ${createTitle} by ${createAuthor}`)
      setTimeout(() => setSuccessMessage(null), 5000)

      fetchBlogs()

      setCreateTitle('')
      setCreateAuthor('')
      setCreateUrl('')
    } catch (exception) {
      setErrorMessage(exception.message)
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  const clickLogoutHandler = () => {
    setUser(null)
    window.localStorage.removeItem(LOGGED_BLOG_LIST_USER)
  }

  const changeUsernameHandler = ({ target }) => setUsername(target.value)
  const changePasswordHandler = ({ target }) => setPassword(target.value)
  const changeTitleHandler = ({ target }) => setCreateTitle(target.value)
  const changeAuthorHandler = ({ target }) => setCreateAuthor(target.value)
  const changeUrlHandler = ({ target }) => setCreateUrl(target.value)

  return (
    <div>
      {!errorMessage || <ErrorMessage message={errorMessage} />}
      {!successMessage || <SuccessMessage message={successMessage} />}
      {user === null || <LoginStatus user={user} clickLogoutHandler={clickLogoutHandler} />}
      {user !== null || 
        <LoginForm 
          submitHandler={submitLoginHandler} 
          username={username} 
          changeUsernameHandler={changeUsernameHandler} 
          password={password}
          changePasswordHandler={changePasswordHandler}
        />
      }
      {user === null || 
        <CreateForm 
          createTitle={createTitle} 
          changeTitleHandler = {changeTitleHandler}
          createAuthor={createAuthor}
          changeAuthorHandler={changeAuthorHandler}
          createUrl={createUrl}
          changeUrlHandler={changeUrlHandler}
          submitHandler={submitCreateHandler}
        />
      }
      {user === null || <Blogs blogs={blogs} />}
    </div>
  )
}

export default App