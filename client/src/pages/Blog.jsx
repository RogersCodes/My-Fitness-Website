import React from "react";
import Navbar from "../components/HomePage/navbar";
import Contact from "../components/HomePage/contact";
import BlogCard from "../components/Blogs/BlogCard";
import BlogSection from "../components/Blogs/BlogSection";
import CategoryBlogs from "../components/Blogs/CategoryBlogs";


function Blog() {
  return (
    <div className="blog-page">
      <Navbar />
      <BlogCard />
      <BlogSection />
      <CategoryBlogs />
      <Contact />
    </div>
  );
}
export default Blog;
