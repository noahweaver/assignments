import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import './Styles.css'
import {ThingsContextProvider} from './ThingsContext'


ReactDOM.render(
    <ThingsContextProvider>
        <App />
    </ThingsContextProvider>
        , document.getElementById("root"))