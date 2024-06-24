import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <UserContextProvider>
    <App />
  </UserContextProvider>
  </AuthContextProvider>
  
)
