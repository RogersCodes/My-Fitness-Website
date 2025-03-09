import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
  {
    title: "3 Exercises for Growing Your Triceps",
    fullContent: "These workouts will grow the size of your arms without spending too much time at the gym...",
    category: "Exercise",
  },
  {
    title: "Meal Prep Ideas During the Holiday Season",
    fullContent: "The holiday season is a time to relax, enjoy, and spend time with loved ones...",
    category: "Nutrition",
  },
  {
    title: "5 Tricks to Stay Motivated As a Beginner",
    fullContent: "It may not be easy to stay motivated as a beginner or an experienced athlete...",
    category: "Tips",
  },
];

const FullBlog = () => {
  const { category, blogTitle } = useParams();

  // Find the matching blog post
  const blog = blogs.find(
    (b) => 
      b.title.replace(/\s+/g, "-").toLowerCase() === blogTitle.toLowerCase() &&
      b.category.toLowerCase() === category.toLowerCase()
  );

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="full-blog">
      <h1>{blog.title}</h1>
      <h3 className="blog-category">Category: {blog.category}</h3>
      <p>{blog.fullContent}</p>
    </div>
  );
};

export default FullBlog;
