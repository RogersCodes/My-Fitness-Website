import React from "react";
import BlogCard from "./BlogCard";
import { useParams } from "react-router-dom";

const CategoryBlogs = () => {
  const { category } = useParams();

  const blogs = [
    {
      title: "3 Exercises for Growing Your Triceps",
      fullContent:
        "These workouts will grow the size of your arm without spending so much time at the gym...",
      category: "Exercise",
      image: "",
    },
    {
      title: "Meal Prep Ideas During the Holiday Season",
      fullContent:
        "The holiday season is a time to relax, enjoy, and spend time with loved ones...",
      category: "Nutrition",
      image: "",
    },
    {
      title: "5 Tricks to Stay Motivated As Beginner",
      fullContent:
        "It may not be easy to stay motivated as a beginner or an experienced athlete...",
      category: "Tips",
      image: "",
    },
  ];

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.category &&
      category &&
      blog.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-blogs">
      <h2 className="blogs-in-category">Blogs in {category}</h2>
      <div className="blog-categories">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              fullContent={blog.fullContent}
              category={blog.category}
              image={blog.image}
            />
          ))
        ) : (
          <p>No blogs found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
