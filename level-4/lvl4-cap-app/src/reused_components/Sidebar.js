import React, {useState} from 'react'

//bootstrap template used: file:///Users/noahweaver/Downloads/sidebar-nav-collapse/sidebar-nav-collapse.html

function Sidebar() {
    
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

    function handleChange(event){
        console.log("checkboxChange")
        const {name, value, checked} = event.target
        setJokeForm(prevState => ({...prevState, [name]: event.target.type === "checkbox" ? checked : value}))
    }

    return (
        <div className="col-lg-2"> 
            <nav className="sidebar card py-4 px-3">
                <span className="">Joke Filters</span>
                <form>
                <ul className="nav flex-column" id="nav-accordian">
                    <li className="nav-item">
                        {/* change <a> to link or navlink */}
                        <a className="nav-link" href="#">type 1</a>
                    </li>
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
                                    checked={jokeForm.xmas}
                                    onChange={handleChange}
                                /> Christmas
                                
                                <input 
                                    name="dark"
                                    type="checkbox" 
                                    checked={jokeForm.dark}
                                    onChange={handleChange}
                                /> Dark
                                <input 
                                    name="misc"
                                    type="checkbox" 
                                    checked={jokeForm.misc}
                                    onChange={handleChange}
                                /> Misc
                                <input 
                                    name="programming"
                                    type="checkbox" 
                                    checked={jokeForm.programming}
                                    onChange={handleChange}
                                /> Programming
                                <input 
                                    name="pun"
                                    type="checkbox" 
                                    checked={jokeForm.pun}
                                    onChange={handleChange}
                                /> Pun
                                <input 
                                    name="spooky"
                                    type="checkbox" 
                                    checked={jokeForm.spooky}
                                    onChange={handleChange}
                                /> Spooky
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
                            checked={jokeForm.explicit}
                            onChange={handleChange}
                        /> Explicit
                        <input 
                            name="nsfw"
                            type="checkbox" 
                            checked={jokeForm.nsfw}
                            onChange={handleChange}
                        /> NSFW
                        <input 
                            name="political"
                            type="checkbox" 
                            checked={jokeForm.political}
                            onChange={handleChange}
                        /> Political
                        <input 
                            name="racist"
                            type="checkbox" 
                            checked={jokeForm.racist}
                            onChange={handleChange}
                        /> Racist
                        <input 
                            name="religious"
                            type="checkbox" 
                            checked={jokeForm.religious}
                            onChange={handleChange}
                        /> Religious
                        <input 
                            name="sexist"
                            type="checkbox" 
                            checked={jokeForm.sexist}
                            onChange={handleChange}
                        /> Sexist
                        </ul>
                    </li>
                </ul>
                </form>
            </nav> 
        </div>
        
    )
}

export default Sidebar
