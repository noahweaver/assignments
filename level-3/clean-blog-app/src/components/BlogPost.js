import React from "react"


function BlogPost (props){

    return(
        <div>
            Title: {props.blog.title}
            SubTitle: {props.blog.subtitle}
            Author: {props.blog.author}
            Date: {props.blog.date}

        </div>


    )
}

export default BlogPost