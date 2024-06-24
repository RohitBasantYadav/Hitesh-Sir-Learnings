import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'
import { AuthContext } from '../context/AuthContextProvider';

const Profile = () => {
    const {userData} = useContext(UserContext);
    const {logout} = useContext(AuthContext);
  return (
    <div>
        <h1>Hello, {userData.username}</h1>
        <button onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default Profile
