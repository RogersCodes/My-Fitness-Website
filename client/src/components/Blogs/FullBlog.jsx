import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/navbar";
import Contact from "../HomePage/contact";

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
    fullContent: [
      "Holidays are the best time to spend with family and loved ones. There are many temptations to overindulge in unhealthy foods during holidays. My personal weakness is cakes. Some people may cherish chapatis, pizzas, and other pastries. Maintaining a healthy diet when traveling or at home with loved ones can be challenging. Few family members and friends may understand one's fitness goals.",
      "Worry not. You do not have to maintain a strict diet during the holidays. Unless you are a beginner and want to lose some weight, you need to stick to healthy habits. Otherwise, you can get away with a few unhealthy choices. For instance, you can opt for a two-meal-a-day plan to balance healthy foods and cheat meals, such as chapatis and pizzas.",
      "As with everything else, moderation is key; ensure you maintain a healthy balance of nutritional intake. I try to incorporate meat and eggs into my diet during holidays. For instance, if you are ordering a pizza, ensure that the extra toppings are protein-based food sources, such as chicken or beef, depending on your taste and preference. ",
      "More importantly, understand that weight gain may happen during the holidays. Such change should not worry you much. Understand that you have been sacrificing to achieve the best body, and you plan on returning to a healthy diet and intense training as soon as the holidays are over.",
      "With that said, make sure you incorporate your family and loved ones in your fitness journey. They may understand your journey and offer support or alternatives like the above choices. Stay blessed!",
    ],
    category: "Nutrition",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1738129978/cld-sample-4.jpg",
  },
  {
    title: "5 Tricks to Stay Motivated As a Beginner",
    fullContent: [
      "One of the most complicated challenges as a beginner is to stay motivated. So many factors are acting against your need for personal growth and improvement. Some factors include lack of discipline, discouragement from friends, family or even other gym goers, and the fear of not achieving your goal. I was once in this position. In fact, I remember someone telling me that my body was not meant for building muscles since I was skinny. I have devised the following strategies that helped me become who I am today through the years.",
      "The first tip is to get a personal trainer, a friend, or a gym buddy who will act as your accountability partner. Working out consistently is not easy; it requires sheer determination and persistence. Sometimes, one can become lazy, unmotivated, or get caught by life's hustles and ups and downs. For this reason, a beginner may need a trainer to teach them how to perform the workout correctly and avoid the risk of injury. A personal trainer also ensures you take the right meals to achieve results quickly.",
      "Alternatively, find a partner who can motivate you on the days you do not feel like going as hard as you should. This approach is practical for intermediate gym goers. Gym partners keep you accountable and push you beyond your limits. A partner can be your friend, a family member, or someone you just met at the gym and connected well. ",
      "Another approach is to keep reminding yourself what you want to achieve. For me, it was 50 Cent. I wanted that gangster look, and I could not stop until I attained it. Find a role model that you can look up to physique-wise. With social media, you can find people with the best physiques who can motivate you to become the best version of yourself. However, be careful since most social media influencers have undergone surgeries or use significant Photoshop in their pictures and videos. Do your research first!",
      "The fourth and last strategies to maintain consistency are to set personal goals and records and follow a structured workout plan. Ensure you have personal goals and keep pushing to achieve them after weeks or months. Having clear goals will motivate you to go back and crush the previous record. Before you know it, you will be addicted like the rest of us. Another approach is to have a clear workout plan. Make sure you target each muscle. Remember, you cannot spot-reduce fats. For this reason, ensure that the body part or muscle group is targeted. These strategies will transform you into the best version of yourself.",
    ],
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741581837/14_ou9kv8.jpg",
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
    <>
    <Navbar />
    <div className="full-blog">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h1 className="full-blog-title">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="full-blog-image" />
      {blog.fullContent.map((paragraph, index) => (
        <p key={index} className="full-blog-paragraph">{paragraph}</p>
      ))}
    </div>
    <Contact />
    </>
    
  );
};

export default FullBlog;
