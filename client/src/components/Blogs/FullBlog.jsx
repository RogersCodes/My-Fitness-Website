import React from "react";
import { useParams } from "react-router-dom";

const FullBlog = () => {
  const { category, blogTitle } = useParams(); // Get category and blog title from URL
  const formattedTitle = decodeURIComponent(blogTitle).replace(/-/g, " "); // Convert dashes back to spaces

  // Sample blog data (Replace this with actual data fetching)
  const blogs = [
    {
      title: "3 Exercises for Growing Your Triceps",
      fullContent:
        "These workouts will grow the size of your arm without spending so much time at the gym. Here are the full details...",
      category: "Exercise",
    },
    {
      title: "Meal Prep Ideas During the Holiday Season",
      fullContent:
        "I have prepared the following recipes to allow you to enjoy your favorite meals while also sticking to your health and fitness goals. Here are the full details...",
      category: "Nutrition",
    },
    {
      title: "5 Tricks to Stay Motivated As Beginner",
      fullContent:
        "It may not be easy to stay motivated as a beginner or an experienced athlete. Sometimes, life and work may get in the way of your fitness goals. Here are the full details...",
      category: "Tips",
    },
  ];

  // Find the matching blog
  const blog = blogs.find(
    (b) => 
      b.category.toLowerCase() === category.toLowerCase() &&
      b.title.toLowerCase() === formattedTitle.toLowerCase()
  );

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="full-blog">
      <h1>{blog.title}</h1>
      <p>{blog.fullContent}</p>
    </div>
  );
};

export default FullBlog;
