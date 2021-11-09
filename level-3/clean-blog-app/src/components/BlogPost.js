import React from "react"


function BlogPost (props){

    const titleStyle ={
        fontSize: "2.5em"
    }
    const subtitleStyle ={
        fontWeight: 300,
        fontFamily: "sans-serif",
        fontSize: "1.8em"
    }
    return(
        <div className="blog-preview">
            <h1 style={titleStyle}> {props.blog.title} </h1>
            <h3 style={subtitleStyle}> {props.blog.subTitle} </h3>
            <p>Posted by {props.blog.author} on {props.blog.date}</p>
        </div>


    )
}

export default BlogPost