import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header-v2';
import CollectionPage from './shop-components/collection';
import Delivery from './section-components/delivery';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';

const Collection = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="SHOP" subheader="Women" />
      <CollectionPage />
      <Delivery />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Collection;
