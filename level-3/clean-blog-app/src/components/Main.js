import React from "react"
import BlogList from "./BlogList"
import OlderPosts from "./OlderPosts"


function Main(){
    return(
        <div>
            <div>
            <BlogList />
            </div>
            <div>
                <OlderPosts />
            </div>
        </div>

    )
}

export default Main