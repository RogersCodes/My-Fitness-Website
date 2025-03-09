import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, fullContent, category, image }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/blog/${encodeURIComponent(title)}`, { state: { fullContent } });
  };

  return (
    <div className="blog-card">
      {image && <img src={image} alt={title} className="blog-image" />}
      <h3 className="blog-title" onClick={handleTitleClick} style={{ cursor: "pointer", color: "blue" }}>
        {title}
      </h3>
      <p className="blog-category">{category}</p>
    </div>
  );
};

export default BlogCard;
