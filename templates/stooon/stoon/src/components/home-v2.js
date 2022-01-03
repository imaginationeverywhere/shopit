import React from 'react';
import NavbarV2 from './global-components/navbar-v2';
import Sliderv2 from './section-components/slider-v2';
import CollectionBannerV2 from './section-components/collection-banner-v2';
import NewArrivalV2 from './section-components/new-arrival-v2';
import CollectionBannerV3 from './section-components/collection-banner-v3';
import LatestCollection from './section-components/latest-collection';
import Video from './section-components/video';
import LatestArticle from './section-components/latest-article-v2';
import LatestCollectionSlider from './section-components/latest-collection-slider';
import Brand from './section-components/brand';
import Subscriber from './section-components/subscriber';
import Delivery from './section-components/delivery';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';

const Home_V2 = () => {
  return (
    <div>
      <NavbarV2 />
      <Sliderv2 />
      <CollectionBannerV2 />
      <NewArrivalV2 customclass="margin-top-75" />
      <CollectionBannerV3 />
      <LatestCollection />
      <Video />
      <LatestArticle />
      <LatestCollectionSlider />
      <Brand />
      <Subscriber />
      <Delivery />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Home_V2;
