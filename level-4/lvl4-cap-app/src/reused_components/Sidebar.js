import React, {useState} from 'react'

//bootstrap template used: file:///Users/noahweaver/Downloads/sidebar-nav-collapse/sidebar-nav-collapse.html

function Sidebar(props) {
    
    // const [jokeForm, setJokeForm] = useState({
    //     xmas: false,
    //     dark: false,
    //     misc: false,
    //     programming: false,
    //     pun: false,
    //     spooky: false,
    //     explicit: false,
    //     nsfw: false,
    //     political: false,
    //     racist: false,
    //     religious: false,
    //     sexist: false,
    // })
    // const [filteredJokes, setFilteredJokes] = useState()

    function handleChange(event){
        console.log("checkboxChange")
        const {name, value, checked} = event.target
        props.setJokeForm(prevState => ({...prevState, [name]: event.target.type === "checkbox" ? checked : value}))
    }
    //fetch data based on state booleans
        //then push to state array
        //should this live here or in <Types />

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
                                    onChange={handleChange}
                                /> Christmas
                                <br></br>
                                <input 
                                    name="dark"
                                    type="checkbox" 
                                    checked={props.jokeForm.dark}
                                    onChange={handleChange}
                                /> Dark
                                <br></br>
                                <input 
                                    name="misc"
                                    type="checkbox" 
                                    checked={props.jokeForm.misc}
                                    onChange={handleChange}
                                /> Misc
                                <br></br>
                                <input 
                                    name="programming"
                                    type="checkbox" 
                                    checked={props.jokeForm.programming}
                                    onChange={handleChange}
                                /> Programming
                                <br></br>
                                <input 
                                    name="pun"
                                    type="checkbox" 
                                    checked={props.jokeForm.pun}
                                    onChange={handleChange}
                                /> Pun
                                <br></br>
                                <input 
                                    name="spooky"
                                    type="checkbox" 
                                    checked={props.jokeForm.spooky}
                                    onChange={handleChange}
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
                            onChange={handleChange}
                        /> Explicit
                        <br></br>
                        <input 
                            name="nsfw"
                            type="checkbox" 
                            checked={props.jokeForm.nsfw}
                            onChange={handleChange}
                        /> NSFW
                        <br></br>
                        <input 
                            name="political"
                            type="checkbox" 
                            checked={props.jokeForm.political}
                            onChange={handleChange}
                        /> Political
                        <br></br>
                        <input 
                            name="racist"
                            type="checkbox" 
                            checked={props.jokeForm.racist}
                            onChange={handleChange}
                        /> Racist
                        <br></br>
                        <input 
                            name="religious"
                            type="checkbox" 
                            checked={props.jokeForm.religious}
                            onChange={handleChange}
                        /> Religious
                        <br></br>
                        <input 
                            name="sexist"
                            type="checkbox" 
                            checked={props.jokeForm.sexist}
                            onChange={handleChange}
                        /> Sexist
                        <br></br>
                        </ul>
                    </li>
                </ul>
                <button
                    className="btn btn-outline-dark btn-sm m-3"
                    >Get Jokes
                </button>
                </form>
            </nav> 
        </div>
        
    )
}

export default Sidebar
