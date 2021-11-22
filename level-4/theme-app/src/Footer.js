import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

function Footer(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`${theme}-theme`}>
            This is the footer.
        </footer>
    )
}

export default Footer
