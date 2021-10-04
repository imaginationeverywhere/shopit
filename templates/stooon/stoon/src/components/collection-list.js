import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header-v2';
import CollectionPage from './shop-components/collection-list';
import Delivery from './section-components/delivery';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';

const CollectionList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Shop" subheader="Women" />
        <CollectionPage />
        <Delivery />
        <Instagram  />
        <Footer />
    </div>
}

export default CollectionList

