import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ContextProvider } from './Context'
import Home from './Home'
import Library from "./Library"
import Types from "./Types"

function App() {
    return (
        <div>
            <ContextProvider>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/jokelibrary" element={<Library />} />
                    <Route path="/joketypes" element={<Types />} />
                </Routes>
            </ContextProvider>
        </div>
    )
}

//add error page

export default App
