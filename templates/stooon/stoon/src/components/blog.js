import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogPost from './blog-components/post-list';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';

const About = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog" />
        <BlogPost />
        <Instagram />
        <Footer />
    </div>
}

export default About

