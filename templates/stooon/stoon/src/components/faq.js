import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import FaqSection from './section-components/faq';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="FAQ" />
      <FaqSection />
      <Instagram />
      <Footer />
    </div>
  );
};

export default ProductDetails;
