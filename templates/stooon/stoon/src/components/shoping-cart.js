import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header-v2";
import ShoppingCart from "./shop-components/shopping-cart";
import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Shopping Cart" subheader="Shopping Cart" />
      <ShoppingCart />
      <Instagram />
      <Footer />
    </div>
  );
};

export default ProductDetails;
