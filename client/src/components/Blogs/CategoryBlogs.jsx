import React from "react";
import BlogCard from "./BlogCard";
import { useParams } from "react-router-dom";

const blogs = [
  {
    title: "3 Exercises for Growing Your Triceps",
    fullContent:
      "These workouts will grow the size of your arms without spending too much time at the gym...",
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
    title: "5 Tricks to Stay Motivated As a Beginner",
    fullContent:
      "It may not be easy to stay motivated as a beginner or an experienced athlete...",
    category: "Tips",
    image: "",
  },
];

const CategoryBlogs = () => {
  const { category } = useParams();

  // Normalize category names for comparison
  const formattedCategory = category.replace(/\s+/g, "-").toLowerCase();

  // Filter blogs based on category
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.category &&
      formattedCategory === blog.category.replace(/\s+/g, "-").toLowerCase()
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
          <p>No blogs found in this category. Check out other categories!</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
