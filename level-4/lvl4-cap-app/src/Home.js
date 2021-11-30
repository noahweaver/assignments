import React, {useContext} from 'react'
import {Context} from './Context'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import Jokecard from './Jokecard'
import {Outlet} from 'react-router-dom'


function Home(props) {

    const {newJoke} = useContext(Context)

    //styling

    return (
        <>
            <Nav />
            <Outlet />
            <Jokecard/>
            <button className="" onClick={newJoke}>Let's try a different one</button>
            <Footer />
        </>
    )
}

export default Home
