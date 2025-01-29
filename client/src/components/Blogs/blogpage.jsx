import React, { useState } from "react";

//Blogcard
const BlogCard = ({ title, content, category, image, onCategoryClick }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" loading="lazy"/>
      <div className="blog-content">
        <h3 className="blog-header">{title}</h3>
        <p className="blog-paragraph">{content}</p>
        <span className="category" onClick={() => onCategoryClick(category)}>{category}</span>
        <button className="read-morre-btn">Read More</button>
      </div>
    </div>
  );
};
//Blog section components
const BlogSection = () => {
  const [featuredBlog, setFeaturedBlog] = useState({
    title: "Top 5 Tips to Maintain Your Physique During Holiday Season",
    content:
      "As the festive season begins, there is so much pressure to take the tasy foods while avoiding weight gain or losing the muscles throughout the year. Here are some tips for this festive season that will help you maintain your body while enjoying the tasy meals and quality time with your friends and family...",
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1738132838/20211212_144103_nb6qzj.jpg",
  });

  const [blogs, setBlogs] = useState([
    {
      title: "3 Exercises for Growing Your Triceps",
      content:
        "These workouts will grow the size of your arm without spending so much time at the gym.",
      category: "Exercise",
      image: "", //show image
    },
    {
      title: "Meal Prep Ideas During the Holiday Season",
      content:
        "I have prepared the following recipes to allow you to enjoy your favorite meals while also sticking to your health and fitness goals.",
      category: "Nutrition",
      image: "", //show image
    },
    {
      title: "5 Tricks to Stay Motivated As Beginnner",
      content:
        "It may not be easy to stay motivated as a beginner or an experienced athlete. Sometimes, life and  work may get in the way of your fitness goals. Remember a workout is better than no workout at all! On the days that you feel low, find a partner who can push you or simply perform the simple exercises that will improve your mood later and you will be proud of yourself.",
      category: "Tips",
      image: "", //show image
    },
  ]);
  //State for tracking the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  //handle category clicks
  const handleCategoryClick = (category) => {
    selectedCategory(category);
  };
  //filter out the selected category
  const filteredBlogs = selectedCategory
  ? blogs.filter((blog) => blog.category === selectedCategory)
  : blogs;

  return (
    <div className="blog-section">
      {/*Featured Blog*/}
      <div className="featured-blog">
        <h2 className="featured-blog-heading">Featured Blog</h2>
        <BlogCard
          title={featuredBlog.title}
          content={featuredBlog.content}
          category={featuredBlog.category}
          image={featuredBlog.image}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      {/* Main Blog Sections*/}
      <div className="blogs">
        <h2 className="blog-lists">Explore Blogs</h2>
        <div className="blog-categories">
          {filteredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              content={blog.content}
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
