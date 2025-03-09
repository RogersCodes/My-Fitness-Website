import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, fullContent, category, image }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/blog/${encodeURIComponent(category)}/${encodeURIComponent(title.replace(/\s+/g, "-"))}`);
  };

  return (
    <div className="blog-card">
      <img src={image || "default-image.jpg"} alt={title} className="blog-image" />
      <h3 
        className="blog-title" 
        onClick={handleTitleClick} 
        style={{ cursor: "pointer", color: "blue" }}
      >
        {title}
      </h3>
      <p>{fullContent.substring(0, 100)}...</p>
    </div>
  );
};

export default BlogCard;
