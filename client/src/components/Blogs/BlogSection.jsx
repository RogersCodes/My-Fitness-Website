import React, { useState } from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const [featuredBlog] = useState({
    title: "Top 5 Tips to Maintain Your Physique During Holiday Season",
    fullContent:
      "As the festive season begins, there is so much pressure to take the tasty foods while avoiding weight gain or losing the muscles throughout the year. Here are some tips for this festive season that will help you maintain your body while enjoying the tasty meals and quality time with your friends and family...",
    category: "Tips",
    image:
      "https://res.cloudinary.com/dnbkxuia3/image/upload/v1738132838/20211212_144103_nb6qzj.jpg",
  });

  const [blogs] = useState([
    {
      title: "3 Exercises for Growing Your Triceps",
      fullContent:
        "Triceps are an important muscle group. Here are three exercises...",
      category: "Exercise",
      image: "", 
    },
    {
      title: "Meal Prep Ideas During the Holiday Season",
      fullContent:
        "The holiday season is a time to relax and enjoy, but that doesn’t mean you have to throw your fitness progress out the window...",
      category: "Nutrition",
      image: "", 
    },
    {
      title: "5 Tricks to Stay Motivated As Beginner",
      fullContent:
        "Here is my advice regarding how I stayed motivated as a beginner...",
      category: "Tips",
      image: "", 
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="blog-section">
      <div className="featured-blog">
        <h2 className="featured-blog-heading">Featured Blog</h2>
        <BlogCard
          title={featuredBlog.title}
          fullContent={featuredBlog.fullContent}
          category={featuredBlog.category}
          image={featuredBlog.image}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <div className="blogs">
        <h2 className="blog-lists">Explore Blogs</h2>
        <div className="blog-categories">
          {filteredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              fullContent={blog.fullContent}
              category={blog.category}
              image={blog.image}
              onCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
