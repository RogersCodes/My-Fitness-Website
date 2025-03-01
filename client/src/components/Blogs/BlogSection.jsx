import React from "react";
import BlogCard from "./BlogCard";
import { useState } from "react";

//Blog section components
const BlogSection = () => {
  const [featuredBlog, setFeaturedBlog] = useState({
    title: "Top 5 Tips to Maintain Your Physique During Holiday Season",
    content:
      "As the festive season begins, there is so much pressure to take the tasy foods while avoiding weight gain or losing the muscles throughout the year. Here are some tips for this festive season that will help you maintain your body while enjoying the tasy meals and quality time with your friends and family...",
    category: "Tips",
    image:
      "https://res.cloudinary.com/dnbkxuia3/image/upload/v1738132838/20211212_144103_nb6qzj.jpg",
  });

  const [blogs, setBlogs] = useState([
    {
      title: "3 Exercises for Growing Your Triceps",
      content:
        "These workouts will grow the size of your arm without spending so much time at the gym.",
      fullContent:
        "Triceps are an important muscle group. Here are three exercises...",
      category: "Exercise",
      image: "", //show image
    },
    {
      title: "Meal Prep Ideas During the Holiday Season",
      content:
        "I have prepared the following recipes to allow you to enjoy your favorite meals while also sticking to your health and fitness goals.",
      fullContent:
        "The holiday season is a time to relax, enjoy, and spend time with loved ones, but that doesn’t mean you have to throw your fitness progress out the window. With a balanced approach, you can indulge in festive meals while staying on track with your goals. Planning your meals during the holidays is key, but you don’t need to be overly strict. If you’re trying to lose weight or reduce fat, focus on including at least one or two high-protein meals a day. Protein helps keep you full and supports muscle retention, so make sure your meals include foods like eggs, lean meats such as chicken, beef, liver, pork, or mutton, and plant-based proteins like legumes and beans. Instead of completely avoiding your favorite holiday treats, practice portion control and prioritize protein-rich foods to stay satisfied. For those aiming to gain weight and build muscle, you can enjoy a few cheat meals here and there, but be strategic about it. If you’re grabbing a pizza, choose high-protein toppings like peri-peri chicken or chicken tikka to ensure you’re still getting quality nutrients. The key is to make sure you're consuming enough protein throughout the day, allowing you to enjoy the festivities without completely abandoning your fitness goals. Ultimately, the holidays are about balance. You don’t have to be overly restrictive to stay on track—just make mindful choices that align with your goals. By prioritizing protein, managing portions, and maintaining a flexible approach, you can enjoy the season without losing sight of your progress. For more specific holiday meal prep tips, feel free to reach out to me via email!",
      category: "Nutrition",
      image: "", //show image
    },
    {
      title: "5 Tricks to Stay Motivated As Beginnner",
      content:
        "It may not be easy to stay motivated as a beginner or an experienced athlete. Sometimes, life and  work may get in the way of your fitness goals. Remember a workout is better than no workout at all! On the days that you feel low, find a partner who can push you or simply perform the simple exercises that will improve your mood later and you will be proud of yourself.",
      fullContent:
        "Here is my advice regarding how I stayed motivated as a beginner...",
      category: "Tips",
      image: "", //show image
    },
  ]);
  //State for tracking the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  //handle category clicks
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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
