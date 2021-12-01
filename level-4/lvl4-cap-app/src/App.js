import React from 'react'
import { ContextProvider } from './Context'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Library from "./Library"
import Types from "./Types"
import './Styles.css'

function App() {

    // going from /joketypes to jokelibrary  directs to joketype/jokelibrary instead of /jokelibrary

    return (
        <>
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
        </>
    )
}

//add error page

export default App
