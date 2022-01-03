import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header-v2';
import SingleProduct from './shop-components/single-product';
import RelatedProduct from './shop-components/related-product';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Shop" subheader="Product Details" />
      <SingleProduct />
      <RelatedProduct />
      <Instagram />
      <Footer />
    </div>
  );
};

export default ProductDetails;
