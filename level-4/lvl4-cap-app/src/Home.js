import React from 'react'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import {Outlet} from 'react-router-dom'

function Home() {
    return (
        <>
            <Nav />
            <h1>Home Page</h1>
            <Outlet />
            <Footer />
        </>
    )
}

export default Home
