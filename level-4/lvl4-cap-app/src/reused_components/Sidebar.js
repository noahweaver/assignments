import React from 'react'

//bootstrap template used: file:///Users/noahweaver/Downloads/sidebar-nav-collapse/sidebar-nav-collapse.html

function Sidebar(props) {
    
    return (
        <div className=""> 
            <nav className="sidebar card py-4 px-3">
                <span className="">Joke Filters</span>
                <form>
                    <button className="btn btn-outline-dark btn-sm m-3"
                        onClick={props.clearFilters}
                    >Clear Filters
                    </button>
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
                                    checked={props.categories.xmas}
                                    onChange={props.handleChangeCategories}
                                /> Christmas
                                <br></br>
                                <input 
                                    name="dark"
                                    type="checkbox" 
                                    checked={props.categories.dark}
                                    onChange={props.handleChangeCategories}
                                /> Dark
                                <br></br>
                                <input 
                                    name="misc"
                                    type="checkbox" 
                                    checked={props.categories.misc}
                                    onChange={props.handleChangeCategories}
                                /> Misc
                                <br></br>
                                <input 
                                    name="programming"
                                    type="checkbox" 
                                    checked={props.categories.programming}
                                    onChange={props.handleChangeCategories}
                                /> Programming
                                <br></br>
                                <input 
                                    name="pun"
                                    type="checkbox" 
                                    checked={props.categories.pun}
                                    onChange={props.handleChangeCategories}
                                /> Pun
                                <br></br>
                                <input 
                                    name="spooky"
                                    type="checkbox" 
                                    checked={props.categories.spooky}
                                    onChange={props.handleChangeCategories}
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
                            checked={props.flags.explicit}
                            onChange={props.handleChangeFlags}
                        /> Explicit
                        <br></br>
                        <input 
                            name="nsfw"
                            type="checkbox" 
                            checked={props.flags.nsfw}
                            onChange={props.handleChangeFlags}
                        /> NSFW
                        <br></br>
                        <input 
                            name="political"
                            type="checkbox" 
                            checked={props.flags.political}
                            onChange={props.handleChangeFlags}
                        /> Political
                        <br></br>
                        <input 
                            name="racist"
                            type="checkbox" 
                            checked={props.flags.racist}
                            onChange={props.handleChangeFlags}
                        /> Racist
                        <br></br>
                        <input 
                            name="religious"
                            type="checkbox" 
                            checked={props.flags.religious}
                            onChange={props.handleChangeFlags}
                        /> Religious
                        <br></br>
                        <input 
                            name="sexist"
                            type="checkbox" 
                            checked={props.flags.sexist}
                            onChange={props.handleChangeFlags}
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
