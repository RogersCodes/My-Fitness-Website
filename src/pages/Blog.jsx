import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import BlogSection from "../components/Blogs/blogpage";


function Blog () {
    return (
        <div className="blog-page">
            <Navbar />
            <BlogSection />
            <Contact />
        </div>
    )
}
export default Blog;