import React, {useContext} from 'react'
import {Context} from './Context'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import Jokecard from './Jokecard'
import {Outlet} from 'react-router-dom'


function Home() {

    // const {newJoke} = useContext(Context)

    return (
        <>
            <Nav />
            <h1>Home Page</h1>
            <Outlet />
            <Jokecard/>
            <button>Let's try a different one</button>
            <Footer />
        </>
    )
}

export default Home
