import React from "react";
import { useParams } from "react-router-dom";
//Add content
const BlogDetails = () => {
  const { blogTitle } = useParams();
  const blog = blogs.find((b) => b.title.replace(/\s+/g, "-").toLowerCase() === blogTitle.toLocaleLowerCase());
  if (!blog) {
      return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Blog not found</h2>;
    }
  return (
      <div className="blog-details">
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <p>{blog.fullContent}</p>
      </div>
  );
};


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
      "The holiday season is a time to relax, enjoy, and spend time with loved ones, but that doesn’t mean you have to throw your fitness progress out the window. With a balanced approach, you can indulge in festive meals while staying on track with your goals. Planning your meals during the holidays is key, but you don’t need to be overly strict. If you’re trying to lose weight or reduce fat, focus on including at least one or two high-protein meals a day. Protein helps keep you full and supports muscle retention, so make sure your meals include foods like eggs, lean meats such as chicken, beef, liver, pork, or mutton, and plant-based proteins like legumes and beans. Instead of completely avoiding your favorite holiday treats, practice portion control and prioritize protein-rich foods to stay satisfied. For those aiming to gain weight and build muscle, you can enjoy a few cheat meals here and there, but be strategic about it. If you’re grabbing a pizza, choose high-protein toppings like peri-peri chicken or chicken tikka to ensure you’re still getting quality nutrients. The key is to make sure you're consuming enough protein throughout the day, allowing you to enjoy the festivities without completely abandoning your fitness goals. Ultimately, the holidays are about balance. You don’t have to be overly restrictive to stay on track—just make mindful choices that align with your goals. By prioritizing protein, managing portions, and maintaining a flexible approach, you can enjoy the season without losing sight of your progress. For more specific holiday meal prep tips, feel free to reach out to me via email!",
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

export default BlogDetails;

