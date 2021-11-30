import React from 'react'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import Sidebar from './reused_components/Sidebar'

function Types() {
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
