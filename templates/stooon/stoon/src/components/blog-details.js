import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import BlogDetails from "./blog-components/blog-details";
import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="BLOG DETAILS" />
      <BlogDetails />
      <Instagram />
      <Footer />
    </div>
  );
};

export default About;
