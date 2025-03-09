import React from "react";
import { useParams } from "react-router-dom";
import FullBlog from "./FullBlog"; // Import FullBlog component

const BlogDetails = () => {
  const { category, blogTitle } = useParams(); // Get category and blog title from URL

  return (
    <div>
      <FullBlog category={category} blogTitle={blogTitle} />
    </div>
  );
};

export default BlogDetails;
