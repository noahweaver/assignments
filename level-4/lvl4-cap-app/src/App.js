import React from 'react'
import { ContextProvider } from './Context'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Library from "./Library"
import Types from "./Types"
import './Styles.css'

function App() {

    return (
        <div>
            <ContextProvider>
                <Routes>
                    {/* redirect '/' to '/home' */}
                    {/* conditionally render home and joke library */}
                    <Route path="/" element={<Layout />} >
                        <Route path="home" element={<Home />} />
                        <Route path="jokelibrary" element={<Library />} />
                    </Route>
                    <Route path="/joketypes" element={<Types />} />
                </Routes>
            </ContextProvider>
        </div>
    )
}

//add error page

export default App
