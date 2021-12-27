import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import AboutWithVideo from "./section-components/about";
import Team from "./section-components/team";
import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="About" />
      <AboutWithVideo />
      <Team />
      <Instagram />
      <Footer />
    </div>
  );
};

export default About;
