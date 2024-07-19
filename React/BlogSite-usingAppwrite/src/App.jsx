import { useEffect, useState } from "react"
import authService from "./appwrite/auth";
import { logout, login } from "./features/authSlice";
import { useDispatch } from "react-redux";
import { Spinner } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  }
  return (
    <>
    <Navbar/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App
