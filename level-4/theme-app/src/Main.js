import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

function Main(props) {
    const {theme, changeTheme} = useContext(ThemeContext)
    return (
        <>
            <div className={`${theme}-theme`}>
                <p>This is the main content</p>
            </div>
            <button className={`${theme === "light" ? "dark" : "light"}-theme`} onClick={changeTheme}>Change Theme</button>
        </>
    )
}

export default Main
