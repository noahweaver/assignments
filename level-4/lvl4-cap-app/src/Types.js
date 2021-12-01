import React, {useContext} from 'react'
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

    //function to render joke cards
        //will need filter and/or map
        //pass props

    return (
        <>
            <Nav />
            <div className="section-content">
                <div className="">
                    <Sidebar />
                    {/* copy styling from jokelibrary */}
                <div className="col-lg-9"> 
                    <h1 >Jokes by type</h1>
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
