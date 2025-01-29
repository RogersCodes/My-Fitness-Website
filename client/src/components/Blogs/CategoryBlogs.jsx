import React from "react";
import BlogCard from "./BlogCard";
import { useParams } from "react-router-dom";


const CategoryBlogs = () => {
    const { category } = useParams(); //Get the category from URL
    const blogs = [
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
      ];
      //filter out the selected category
      const filteredBlogs = blogs.filter(
          (blog) => blog.category &&
          category &&
          blog.category.toLowerCase() === category.toLowerCase()
      );
      return (
        <div className="category-blogs">
          <h2 className="blogs-in-category">Blogs in {category}</h2>
          <div className="blog-categories">
              {filteredBlogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  content={blog.content}
                  category={blog.category}
                  image={blog.image}
                />
              ))}
            </div>
          </div>
      );
};
  export default CategoryBlogs;