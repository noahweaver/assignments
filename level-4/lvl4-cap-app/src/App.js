import React from 'react'
import { ContextProvider } from './Context'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Library from "./Library"
import Types from "./Types"
import NotFound from './reused_components/NotFound'
import './Styles.css'

function App() {

    // going from /joketypes to jokelibrary  directs to joketype/jokelibrary instead of /jokelibrary

    return (
        <>
            <ContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="jokelibrary" element={<Library />} />
                    </Route>
                    <Route path="/joketypes" element={<Types />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ContextProvider>
        </>
    )
}

//add error page

export default App
