import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/ThemeContextProvider'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';


function App() {
  const {themeMode,setThemeMode,darkTheme,lightTheme} = useContext(ThemeContext);

  useEffect(()=>{
    let html = document.querySelector("html");
    html.classList.remove("light","dark");
    html.classList.add(themeMode);
  },[themeMode])

  return (
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

  )
}

export default App
