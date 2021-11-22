import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
function Navbar(props) {

    const {theme} = useContext(ThemeContext)

    return (
        <nav className={`${theme}-theme`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
