import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    let res = await fetch("https://api.github.com/users/rohitbasantyadav");
    return res.json();
}