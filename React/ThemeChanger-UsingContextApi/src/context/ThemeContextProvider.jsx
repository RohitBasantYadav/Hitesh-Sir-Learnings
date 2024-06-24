import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState("light");

    const darkTheme =  ()=>{
        setThemeMode("dark");
    }
    const lightTheme = ()=>{
        setThemeMode("light");
    }

  return (
    <ThemeContext.Provider value={{themeMode,setThemeMode,darkTheme,lightTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
