import React, { useState } from "react";
 
//Blogcard
const BlogCard = ({ title, content, category, image }) => {
    return (
        <div className="blog-card">
            <img src={image} alt={title} className="blog-image"/>
            <div className="blog-content">
                <h3 className="blog-header">{title}</h3>
                <p className="blog-paragraph">{content}</p>
                <span className="category">{category}</span>
            </div>
        </div>
    );
};
//Blog section components
const BlogSection = () => {
    const [featuredBlog, setFeaturedBlog] = useState({
        title: "Top 5 Tips to Maintain Your Physique During Holiday Season",
        content: "As the festive season begins, there is so much pressure to take the tasy foods while avoiding weight gain or losing the muscles throughout the year. Here are some tips for this festive season that will help you maintain your body while enjoying the tasy meals and quality time with your friends and family...",
        category: "Tips",
        image: "", //add image later
    });
    
    const [blogs, setBlogs] = useState([
        {
            title: "3 Exercises for Growing Your Triceps",
            content: "These workouts will grow the size of your arm without spending so much time at the gym.",
            category: "Exercise",
            image: "", //show image
        },
        {
            title: "Meal Prep Ideas During the Holiday Season",
            content: "I have prepared the following recipes to allow you to enjoy your favorite meals while also sticking to your health and fitness goals.",
            category: "Nutrition",
            image: "", //show image
        },
        {
            title: "5 Tricks to Stay Motivated As Beginnner",
            content: "It may be easy to stay motivated as a beginner or an experienced athlete. Sometimes, life and  work may get in the way of your fitness goals. Remember a workout is better than no workout at all! On the days that you feel low, find a partner who can push you or simply perform the simple exercises that will improve your mood later and you will be proud of yourself.",
            category: "Tips",
            image: "", //show image
        }
    ]);
    return(
        <div className="blog-section">
            {/*Featured Blog*/}
            <div className="featured-blog">
                <h2 className="featured-blog-heading">Featured Blog</h2>
                <BlogCard 
                    title={featuredBlog.title}
                    content={featuredBlog.content}
                    category={featuredBlog.category}
                    image={featuredBlog.image}
                />
            </div>
        </div>
    )
}
export default BlogSection;