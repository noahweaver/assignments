import React from 'react'
import Nav from './reused_components/Nav'
import Warning from './reused_components/Warning'
import Footer from './reused_components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {

    return (
        <>
            <Nav />
            <Warning />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
