import React from 'react'
import Home from './Home'
import Services from './Services'
import About from './About'
import {Routes, Route} from 'react-router-dom'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App
