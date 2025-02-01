import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Blogcard
const BlogCard = ({ title, content, category, image }) => {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate(`/blog/${category.toLowerCase()}`);
  };

  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" loading="lazy"/>
      <div className="blog-content">
        <h3 className="blog-header">{title}</h3>
        <p className="blog-paragraph">{content}</p>
        <span className="category" onClick={handleCategoryClick}>{category}</span>
        <button className="read-more-btn" type="button">Read More</button>
      </div>
    </div>
  );
};
export default BlogCard;
