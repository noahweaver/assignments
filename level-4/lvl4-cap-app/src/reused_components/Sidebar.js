import React from 'react'

//bootstrap template used: file:///Users/noahweaver/Downloads/sidebar-nav-collapse/sidebar-nav-collapse.html

function Sidebar(props) {
    
    return (
        <div className=""> 
            <nav className="sidebar card py-4 px-3">
                <span className="">Joke Filters</span>
                <form>
                <ul className="nav flex-column" id="nav-accordian">
                    <li className="nav-item has-submenu">
                        <a 
                            className="nav-link" 
                            to={"category"}
                            >Category
                        </a>
                        <ul className="submenu collapse">
                            <li>
                                <input 
                                    name="xmas"
                                    type="checkbox" 
                                    checked={props.jokeForm.xmas}
                                    onChange={props.handleChange}
                                /> Christmas
                                <br></br>
                                <input 
                                    name="dark"
                                    type="checkbox" 
                                    checked={props.jokeForm.dark}
                                    onChange={props.handleChange}
                                /> Dark
                                <br></br>
                                <input 
                                    name="misc"
                                    type="checkbox" 
                                    checked={props.jokeForm.misc}
                                    onChange={props.handleChange}
                                /> Misc
                                <br></br>
                                <input 
                                    name="programming"
                                    type="checkbox" 
                                    checked={props.jokeForm.programming}
                                    onChange={props.handleChange}
                                /> Programming
                                <br></br>
                                <input 
                                    name="pun"
                                    type="checkbox" 
                                    checked={props.jokeForm.pun}
                                    onChange={props.handleChange}
                                /> Pun
                                <br></br>
                                <input 
                                    name="spooky"
                                    type="checkbox" 
                                    checked={props.jokeForm.spooky}
                                    onChange={props.handleChange}
                                /> Spooky
                                <br></br>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item has-submenu">
                        {/* change <a> to link or navlink */}
                        <a 
                            className="nav-link" 
                            to={"flag"}
                            >Flag
                        </a>
                        <ul className="submenu collapse">
                        <input 
                            name="explicit"
                            type="checkbox" 
                            checked={props.jokeForm.explicit}
                            onChange={props.handleChange}
                        /> Explicit
                        <br></br>
                        <input 
                            name="nsfw"
                            type="checkbox" 
                            checked={props.jokeForm.nsfw}
                            onChange={props.handleChange}
                        /> NSFW
                        <br></br>
                        <input 
                            name="political"
                            type="checkbox" 
                            checked={props.jokeForm.political}
                            onChange={props.handleChange}
                        /> Political
                        <br></br>
                        <input 
                            name="racist"
                            type="checkbox" 
                            checked={props.jokeForm.racist}
                            onChange={props.handleChange}
                        /> Racist
                        <br></br>
                        <input 
                            name="religious"
                            type="checkbox" 
                            checked={props.jokeForm.religious}
                            onChange={props.handleChange}
                        /> Religious
                        <br></br>
                        <input 
                            name="sexist"
                            type="checkbox" 
                            checked={props.jokeForm.sexist}
                            onChange={props.handleChange}
                        /> Sexist
                        <br></br>
                        </ul>
                    </li>
                </ul>
                <button
                    className="btn btn-outline-dark btn-sm m-3"
                    // props.handleSubmit won't run as "onSubmit", only "onClick"
                    onClick={props.handleSubmit}
                    >Get Jokes
                </button>
                </form>
            </nav> 
        </div>
        
    )
}

export default Sidebar
