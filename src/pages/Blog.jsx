import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import BlogCard from "../components/Blogs/blogpage";

function Blog () {
    return (
        <div className="blog-page">
            <Navbar />
            <BlogCard />
            <Contact />
        </div>
    )
}
export default Blog;