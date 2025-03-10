import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Exercises for Growing Your Triceps",
    fullContent: [
      "Triceps are among the best muscles that will make you look good in that t-shirt or if you want massive arms. In complex terms, the triceps consists of three muscles; the long head, lateral head, and medial head. Do not worry about these terms; I will explain how you can target them effectively without going to a fancy gym.",
      "The first exercise is the barbell close-grip bench press, which primarily targets the triceps' lateral (outer part) and medial (middle part) heads. The triceps' long head (inner part) gets stimulated but not significantly compared to the two. Other exercises include triceps kickbacks and diamond push-ups.",
      "To target the long head of the triceps, focus on skull crushers, overhead dumbbell extension, overhead rope triceps extension, and triceps kickbacks. Some people experience elbow when performing skull crushers (myself included). Therefore, it is advisable to focus on the other exercises.",
      "The medial head of the triceps can be targeted through reverse grip cable pushdowns, triceps dips, close-grip bench presses, and dumbbell skull crushers. These exercises can be performed in any gym with dumbbells and barbells.",
      "The most important strategy is to focus on controlled movements. Ensure your elbow is tucked in during pushdowns and dips to recruit the triceps. Additionally, maintaining shoulder stability and focusing on a full range of motion are essential to achieve optimal results.",
    ],
    category: "Exercise",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741583385/8_fwnlpt.jpg",
  },
  {
    title: "Meal Prep Ideas During the Holiday Season",
    fullContent: "The holiday season is a time to relax, enjoy, and spend time with loved ones...",
    category: "Nutrition",
    image: "/images/mealprep.jpg",
  },
  {
    title: "5 Tricks to Stay Motivated As a Beginner",
    fullContent: "It may not be easy to stay motivated as a beginner or an experienced athlete...",
    category: "Tips",
    image: "/images/motivation.jpg",
  },
];

const FullBlog = () => {
  const { blogTitle } = useParams();
  const navigate = useNavigate();

  const formattedTitle = (title) => encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));

  const blog = blogs.find(
    (b) =>
      formattedTitle(b.title) === blogTitle.toLowerCase()
  );

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="full-blog">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      {blog.fullContent.map((paragraph, index) => (
        <p key={index} className="full-blog-paragraph">{paragraph}</p>
      ))}
    </div>
  );
};

export default FullBlog;
