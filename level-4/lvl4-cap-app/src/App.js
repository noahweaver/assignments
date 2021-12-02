import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Library from "./Library"
import Types from "./Types"
import NotFound from './reused_components/NotFound'
import './Styles.css'

function App() {

    return (
        <>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="jokelibrary" element={<Library />} />
                    </Route>
                    <Route path="/joketypes" element={<Types />}>
                        <Route index element={<Types />} />
                        <Route path="category" element={<Types />} />
                        <Route path=":category" element={<Types />} />
                        <Route path="flag" element={<Types />} />
                        <Route path=":flag" element={<Types />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
        </>
    )
}

export default App
