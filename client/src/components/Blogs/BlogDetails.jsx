import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
  {
    title: "3 Exercises for Growing Your Triceps",
    fullContent:
      "Here is a detailed guide on growing your triceps effectively...",
    category: "Exercise",
    image: "",
  },
  {
    title: "Meal Prep Ideas During the Holiday Season",
    fullContent:
      "Planning meals during the holiday season is important to stay on track...",
    category: "Nutrition",
    image: "",
  },
  {
    title: "5 Tricks to Stay Motivated As a Beginner",
    fullContent:
      "Motivation can be hard to maintain. Here are five tricks that can help...",
    category: "Tips",
    image: "",
  },
];
const BlogDetails = () => {
    const { blogTitle } = useParams();
    const blog = blogs.find((b) => b.title.replace(/\s+/g, "-").toLowerCase() === blogTitle);
    return (
        <div className="blog-details">
            <h2>{blog.title}</h2>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <p>{blog.fullContent}</p>
        </div>
    );
};
export default BlogDetails;

