import React from "react";
import BlogDetailsWithSidebar from "@/components/BlogDetailsWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details | Officeworks",
  description: "Blog article - Officeworks",
  // other metadata
};

const BlogDetailsWithSidebarPage = () => {
  return (
    <main>
      <BlogDetailsWithSidebar />
    </main>
  );
};

export default BlogDetailsWithSidebarPage;
