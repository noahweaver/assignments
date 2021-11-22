import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import './Styles.css'
import {ThemeContextProvider} from './ThemeContext'


ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
        , document.getElementById("root"))