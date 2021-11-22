import React, {useState} from 'react'
const ThemeContext = React.createContext()

function ThemeContextProvider (props){

    const [theme, setTheme] = useState("light")

    function changeTheme(){
        setTheme(prevTheme => {
           return prevTheme === "light" ? "dark" : "light"
        })
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export {ThemeContextProvider, ThemeContext}