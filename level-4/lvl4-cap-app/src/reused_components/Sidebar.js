import React, {useState} from 'react'

//bootstrap template used: file:///Users/noahweaver/Downloads/sidebar-nav-collapse/sidebar-nav-collapse.html

function Sidebar() {
    
    const [jokeForm, setJokeForm] = useState({
        xmas: false,
        dark: false,
    })


    return (
        <div className="col-lg-2"> 
            <nav className="sidebar card py-4 px-3">
                <span className="">Side Nav Title</span>
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
                                    value={jokeForm.xmas}
                                    onChange={(() => setJokeForm(jokeForm.xmas === true ? false : true))}
                                    // isChecked={jokeForm.xmas = true}
                                /> Christmas
                                
                                <input 
                                    name="dark"
                                    type="checkbox" 
                                    value={jokeForm.dark}
                                    onChange={() => setJokeForm(jokeForm.dark === true ? false : true)}
                                /> Dark
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        {/* change <a> to link or navlink */}
                        <a className="nav-link" href="#">type 1</a>
                    </li>
                </ul>
            </nav> 
        </div>
        
    )
}

export default Sidebar
