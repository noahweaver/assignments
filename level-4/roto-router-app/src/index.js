import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Services from './Services'
import About from './About'
import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate,
    link
} from 'react-router-dom'

ReactDOM.render(
<Router>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
    </Routes>
</Router>
, document.getElementById("root"))
