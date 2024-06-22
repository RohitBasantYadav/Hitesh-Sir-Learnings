import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {id} = useParams();
    // console.log(userId)
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      This is User{id}
    </div>
  )
}

export default User
