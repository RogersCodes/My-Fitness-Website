import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, fullContent, category, image }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/blog/${encodeURIComponent(category)}/${encodeURIComponent(title.replace(/\s+/g, "-"))}`);
  };  

  const handleCategoryClick = () => {
    navigate(`/category/${encodeURIComponent(category.toLowerCase())}`);
  };

  return (
    <div className="blog-card">
      {image && <img src={image} alt={title} className="blog-image" />}
      <h3
        className="blog-title"
        onClick={handleTitleClick}
        style={{ cursor: "pointer", color: "blue" }}
      >
        {title}
      </h3>
      <span
        className="blog-category"
        onClick={handleCategoryClick}
        style={{ cursor: "pointer", color: "green", textDecoration: "underline" }}
      >
        {category}
      </span>
    </div>
  );
};

export default BlogCard;
