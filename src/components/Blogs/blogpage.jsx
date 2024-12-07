import React, { useState } from "react";
 
//Blogcard
const BlogCard = ({ title, content, category, image }) => {
    return (
        <div className="blog-card">
            <img src={image} alt={title} className="blog-image"/>
            <div className="blog-content">
                <h3 className="blog-header">{title}</h3>
                <p className="blog-paragraph">{content}</p>
                <span className="category">{category}</span>
            </div>
        </div>
    );
};
//Blog section components
const BlogSection = () => {
    const [featuredBllog, setFeaturedBlog] = useState({
        title: "Top 5 Tips to Maintain Your Physique During Holiday Season",
        content: ""
    })
}
export default BlogSection;