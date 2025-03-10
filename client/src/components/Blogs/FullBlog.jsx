import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "3 Exercises for Growing Your Triceps",
    fullContent: "These workouts will grow the size of your arms without spending too much time at the gym...",
    category: "Exercise",
    image: "/images/triceps.jpg",
  },
  {
    title: "Meal Prep Ideas During the Holiday Season",
    fullContent: "The holiday season is a time to relax, enjoy, and spend time with loved ones...",
    category: "Nutrition",
    image: "/images/mealprep.jpg",
  },
  {
    title: "5 Tricks to Stay Motivated As a Beginner",
    fullContent: "It may not be easy to stay motivated as a beginner or an experienced athlete...",
    category: "Tips",
    image: "/images/motivation.jpg",
  },
];

const FullBlog = () => {
  const { category, blogTitle } = useParams();
  const navigate = useNavigate();

  const formattedTitle = (title) => encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));

  const blog = blogs.find(
    (b) =>
      formattedTitle(b.title) === blogTitle.toLowerCase() &&
      b.category.toLowerCase() === category.toLowerCase()
  );

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="full-blog">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <h3>
        Category:{" "}
        <span className="blog-category" onClick={() => navigate(`/category/${category.toLowerCase()}`)}>
          {blog.category}
        </span>
      </h3>
      <p>{blog.fullContent}</p>
    </div>
  );
};

export default FullBlog;
