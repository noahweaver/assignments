import React, {useState} from 'react'

//bootstrap template used: file:///Users/noahweaver/Downloads/sidebar-nav-collapse/sidebar-nav-collapse.html

function Sidebar() {
    
    const [jokeForm, setJokeForm] = useState({
        xmas: false,
        dark: false,
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
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        {/* change <a> to link or navlink */}
                        <a className="nav-link" href="#">type 1</a>
                    </li>
                </ul>
                </form>
            </nav> 
        </div>
        
    )
}

export default Sidebar
