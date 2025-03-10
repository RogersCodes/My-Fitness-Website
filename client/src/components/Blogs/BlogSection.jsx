import { Link, useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Exercises for Growing Your Triceps",
    category: "Exercise",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741583385/8_fwnlpt.jpg",
  },
  {
    title: "Meal Prep Ideas During the Holiday Season",
    category: "Nutrition",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1738129978/cld-sample-4.jpg",
  },
  {
    title: "5 Tricks to Stay Motivated As a Beginner",
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741581837/14_ou9kv8.jpg",
  },
  {
    title: "Common Misconceptions at the Gym",
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741589291/IMG_7314_u4cvye.jpg",
  },
  {
    title: "Reasons You Are Taking Longer to Achieve Your Goals",
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/v1741589591/20190903085853_IMG_2929_oite80.jpg",
  },
  {
    title: "Why Rushing Into Supplements is Not a Great Idea",
    category: "Tips",
    image: "https://res.cloudinary.com/dnbkxuia3/image/upload/t_Creatine_mono/v1741590958/creatine_wfwp5h.webp",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      {/* Main Title */}
      <h1 className="blog-title">Blogs</h1>

      {/* Blog Grid */}
      <div className="blog-section">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>
              <Link to={`/blog/${blog.category.toLowerCase()}/${encodeURIComponent(blog.title.toLowerCase().replace(/\s+/g, "-"))}`} className="blog-head">
                {blog.title}
              </Link>
            </h3>
            <span className="blog-category" onClick={() => navigate(`/blog/category/${blog.category.toLowerCase()}`)}>
              {blog.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
