import React from "react"
import BlogPost from "./BlogPost"
import BlogsArray from "./BlogsArray"

function BlogList(){

    const blogs = BlogsArray.map(blog => <BlogPost key={blog.title} blog={blog} />)

    return(
        <div>
            {blogs}
        </div>

    )
}

export default BlogList