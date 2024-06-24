import { useContext } from "react"
import { UserContext } from "./context/UserContextProvider"
import Login from "./components/Login";
import { AuthContext } from "./context/AuthContextProvider";
import Profile from "./components/Profile";


function App() {
  const {isLoggedIn} = useContext(AuthContext);
  // console.log(value)
  return (
    <>
      <h1>This is App</h1>
      {isLoggedIn?<Profile/>: <Login/> }
    </>
  )
}

export default App
