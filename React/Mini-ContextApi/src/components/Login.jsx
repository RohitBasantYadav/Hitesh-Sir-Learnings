import React, { useContext, useState, useRef } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { UserContext } from '../context/UserContextProvider'

const Login = () => {
    const {login} = useContext(AuthContext)
    const {setUserData} = useContext(UserContext)
    const [loginDetails, setLoginDetails] = useState({
        username:"",
        password:""
    });
    const inputRef = useRef(null);
    const handleLogin = (e)=>{
        e.preventDefault()
        // console.log(inputRef)
        // console.log(loginDetails)
        setUserData(loginDetails);
        login()
    }

    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setLoginDetails({...loginDetails,[name]:value})
    }
  return (
    <div>
        <h1>Login to Move to Profile page</h1>
        <form onSubmit={handleLogin}>
      <input ref={inputRef} onChange={handleChange} value={loginDetails.username} name='username' type='text' placeholder='Enter Username' required/>
      <input onChange={handleChange} name='password' value={loginDetails.password} type='password' placeholder='Enter Password'/>
      <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
