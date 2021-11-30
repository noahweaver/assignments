import React from 'react'
import {NavLink} from 'react-router-dom'



function Nav() {

    //make sure id="navbarScroll works"
    //bootstrap link: https://getbootstrap.com/docs/5.1/components/navbar/

    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark py-4 nav-bg-color-forestgreen">
            {/* navbar-expand-sm: navbar turns vertical at 575px */}
            <div className="container-fluid">
                <span className="navbar-brand">
                    JokesApp
                </span>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}
                <div className="navbar-collapse" id="navbarText navbarScroll">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                aria-current="page" 
                                to="/home">
                                    Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="jokelibrary">
                                    Joke Library
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
    
}

export default Nav
