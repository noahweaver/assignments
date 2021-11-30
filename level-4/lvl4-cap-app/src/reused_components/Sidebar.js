import React from 'react'

//bootstrap template used: file:///Users/noahweaver/Downloads/sidebar-nav-collapse/sidebar-nav-collapse.html

function SideNav() {
    
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
                        {/* change <a> to link or navlink */}
                        <a className="nav-link" href="#">submenu links</a>
                        <ul className="submenu collapse">
                            <li><a className="nav-link" href="#">submenu item 1</a></li>
                            <li><a className="nav-link" href="#">submenu item 2</a></li>
                            <li><a className="nav-link" href="#">submenu item 3</a></li>
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

export default SideNav
