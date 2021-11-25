import React from 'react'
import Home from './Home'
import Services from './Services'
import ServicesId from './ServicesId'
import About from './About'
import Dashboard from './Dashboard'

import {Routes, Route} from 'react-router-dom'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />}>
                    <Route path="services" element={<Services />}>
                        <Route path=":serviceid" element={<ServicesId />} />
                    </Route>
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App
