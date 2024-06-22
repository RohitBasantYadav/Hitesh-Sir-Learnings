import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, BrowserRouter } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import User from './pages/User.jsx'
import Github, { githubInfoLoader } from './pages/Github.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:id",
        element:<User/>
      },
      {
        loader:async ()=>{
          return githubInfoLoader()
        },
        path:"github",
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
