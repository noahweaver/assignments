import React from 'react'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {

    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
