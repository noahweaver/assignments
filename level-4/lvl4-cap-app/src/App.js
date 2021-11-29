import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Library from "./Library"
import Types from "./Types"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />}>
                    <Route path="jokelibrary" element={<Library />} />
                </Route>
                <Route path="/joketypes" element={<Types />} />
            </Routes>
        </div>
    )
}

export default App
