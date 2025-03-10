import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "3 Exercises for Growing Your Triceps",
    category: "Exercise",
    image: "/images/triceps.jpg",
  },
  {
    title: "Meal Prep Ideas During the Holiday Season",
    category: "Nutrition",
    image: "/images/mealprep.jpg",
  },
  {
    title: "5 Tricks to Stay Motivated As a Beginner",
    category: "Tips",
    image: "/images/motivation.jpg",
  },
];

const CategoryBlogs = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredBlogs = blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="category-blogs">
      <button onClick={() => navigate(-1)} className="back-button">← Back to Blogs</button>
      <h2>Blogs in {category}</h2>

      <div className="blog-list">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h3>
                <Link to={`/blog/${category.toLowerCase()}/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, "-"))}`}>
                  {blog.title}
                </Link>
              </h3>
              <span className="blog-category" onClick={() => navigate(`/category/${blog.category.toLowerCase()}`)}>
                {blog.category}
              </span>
            </div>
          ))
        ) : (
          <p>No blogs found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
