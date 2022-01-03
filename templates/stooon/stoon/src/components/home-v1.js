import React from 'react';
import Navbar from './global-components/navbar';
import Slider from './section-components/slider';
import CollectionBanner from './section-components/collection-banner';
import NewArrival from './section-components/new-arrival';
import SaleBanner from './section-components/sale-banner';
import Trending from './section-components/trending';
import CollectionSlider from './section-components/collection-slider';
import Ads from './section-components/ads';
import LatestArticle from './section-components/latest-article';
import Brand from './section-components/brand';
import Subscriber from './section-components/subscriber';
import Delivery from './section-components/delivery';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';

const Home_V1 = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <CollectionBanner />
      <NewArrival />
      <SaleBanner />
      <Trending />
      <CollectionSlider />
      <Ads />
      <LatestArticle />
      <Brand />
      <Subscriber />
      <Delivery />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Home_V1;
