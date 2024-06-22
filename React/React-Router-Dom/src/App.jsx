import AllRoutes from "./componets/AllRoutes"
import Navbar from "./componets/Navbar"
import Footer from "./componets/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
