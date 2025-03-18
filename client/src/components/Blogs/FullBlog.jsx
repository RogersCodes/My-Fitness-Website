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
      "To target the long head of the triceps, focus on skull crushers, overhead dumbbell extension, overhead rope triceps extension, and triceps kickbacks. Some people experience elbow pain when performing skull crushers (myself included). Therefore, it is advisable to focus on the other exercises.",
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
  {
    title: "Common Misconceptions at the Gym",
    fullContent: [
      "Everyone has heard a misconception about gymgoers. These rumors range from sexual performance to physical injuries. As a researcher and a personal trainer, I want to address the common misconceptions about working out and hopefully educate you on why you should start or continue working out. ",
      "The first misconception is that working out weakens the sexual performance of men. It is common to hear men and women claim that avid gym goers, especially men, are unable to perform sexually. In contrast, working out lowers blood pressure and enhances vasodilation, the widening of blood vessels. These two result in improved libido and sexual performance. The case of sexual problems could be due to taking performance-enhancement drugs. Anxiety and pre-existing medical conditions can also undermine sexual performance but not work out.",
      "Another misconception is that you can gain muscles in a week. It is common to find YouTube channels and fitness influencers claiming that you can attain a lean back or ripped abs within a week. All these are marketing gimmicks meant to promote workout plans. Body recomposition takes at least a month with the right diet and workout plan. After three months or later, you can start seeing visible changes. This also depends on the body type.",
      "The third misconception is that you can focus on certain workouts to reduce fat in specific body parts. For instance, one can assume that focusing on abs workouts only can reduce the fat around the belly. The body does not work this way. Fat loss occurs across the body. You cannot spot-reduce fats. Instead, focus on full-body and high-intensity interval training (HIIT) workouts to achieve the best results.",
      "The fourth misconception is that longer workout sessions are more effective than shorter ones. Some people believe spending more than 2 hours at the gym can result in the best outcome. However, this is incorrect. A workout can take only 45 minutes to be as effective. The goal is to activate the right muscles with the right form, range of motion, and time under tension.",
      "Another misconception is that feeling sore means the workout is effective. Chasing the sore feeling has led people to overtrain, leading to muscle atrophy. You do not always have to feel sore for the workout to be effective. You should be okay if you activate the right muscle group within a stipulated time. Always do research to understand how your body responds to workouts.",
    ],
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741589291/IMG_7314_u4cvye.jpg",
  },
  {
    title: "Reasons You Are Taking Longer to Achieve Your Goals",
    fullContent: [
      "At times, you can wonder why it is taking so long to achieve your fitness goals. By taking long, I am referring to six months or over a year and not seeing results. After a year, you should note some physical changes if you have been consistent with your workouts. If you do not see any improvement, you could be failing in the following areas.",
      "The most important barrier to fitness goals is an appropriate diet. Overlooking the role that your diet plays in your fitness journey could be detrimental. A rule of thumb is that you can never out-train a bad diet. You cannot consume processed foods and expect to burn all the calories in one workout session. It takes months and even years to undo bad dietary choices. Always watch your diet if you want to achieve the best results.",
      "Another limiting factor is the lack of adequate rest. Sleep is a vital determining factor for the best physique. Your muscles repair and rebuild while resting, not at the gym! So, if you do have adequate rest, your body may not recover fully. As a result, it will take you longer to achieve your results.",
      "Another factor affecting your fitness journey is changing your workout routines regularly. You should have a given workout plan for a while to target all the muscle groups. Changing workout routines may lead to some muscles being overlooked. This approach undermines muscle growth and development.",
      "Undereating can also delay your journey to achieving the best physique. This is evident in underweight individuals. If your goal is to add muscles, you need to consume significant amounts of protein to facilitate muscle recovery and growth. Failing to eat enough can promote catabolism, which impairs muscle growth.",
      "Finally, avoid taking advice from multiple individuals at once. The fitness community has many personal trainers with different approaches. Please stick to one trainer and follow their program for a while. Unless you notice a plateau, keep working with the same trainer.",
    ],
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741589591/20190903085853_IMG_2929_oite80.jpg",
  },
  {
    title: "Why Rushing Into Supplements is Not a Great Idea",
    fullContent: [
      "Before I get persecuted for this blog, let me admit there is nothing wrong with taking dietary supplements. Magnesium, Zinc, and Omega-3 supplements are my favorite supplements. However, do enough background checks to ensure you buy legit supplements. Back to protein shakes, as a beginner, you should keep them off for the following reasons.",
      "I have been taking creatine for improved physical and cognitive performance. Creatine is one of the most-researched supplements with no health risks. It can help gymgoers achieve significant strength and physique.",
      "However, a beginner should not rush to take supplements. As a beginner, your body is new to the gym, and you are still adjusting to the physical changes. Unless recommended by a doctor, avoid protein supplements. You should push your body as much as possible using your diet to see how much growth you can achieve naturally.",
      "Taking supplements as soon as you start working out limits your body's natural potential. Try as much as possible to push to your natural limits. When you achieve a plateau, then you can start shopping for supplements. I used a similar approach to achieve my physique. You need to learn how to recompose your body naturally. This way, you can use the supplements later to take you to the next stage. ",
      "Going the natural way may seem hard in the social media era, where most influencers look like Greek gods. Remember, you started this journey alone. Bodies are different; you may achieve the best results without protein supplements. This is not to say I do not recommend supplements; I advocate for using creatine among seasoned gymgoers. However, beginners should learn about their bodies naturally first; this way, it becomes easy to supplement your diet.",
    ],
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/t_Creatine_mono/v1741590958/creatine_wfwp5h.webp",
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
