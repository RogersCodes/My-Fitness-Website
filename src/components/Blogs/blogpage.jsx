import React from "react";
 
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
export default BlogCard;