import React, {useContext, useState} from 'react'
// import {useParams} from 'react-router-dom'
import {Context} from './Context'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import Sidebar from './reused_components/Sidebar'
import Jokecard from './Jokecard'


function Types(props) {
    //probably going to pull jokesArr from context
    const {} = useContext(Context)
    // let params = useParams()

    const [jokeForm, setJokeForm] = useState({
        xmas: false,
        dark: false,
        misc: false,
        programming: false,
        pun: false,
        spooky: false,
        explicit: false,
        nsfw: false,
        political: false,
        racist: false,
        religious: false,
        sexist: false,
    })
    const [filteredJokes, setFilteredJokes] = useState()

    return (
        <>
            <Nav />
            <div className="section-content">
                <div className="d-flex">
                    <Sidebar jokeForm={jokeForm} setJokeForm={setJokeForm}/>
                    {/* copy styling from jokelibrary */}
                <div className="col-lg-9"> 
                    <p className="display-6 m-5">Jokes by type</p>
                    <ul>
                        {/* function doing rendering from above */}
                        jokecards will render here
                    </ul>                
                </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Types
