import React from "react";
import NavbarV5 from "./global-components/navbar-v5";
import Sliderv5 from "./section-components/slider-v5";
import CollectionSliderV2 from "./section-components/collection-slider-v2";
import NewArrivalV2 from "./section-components/new-arrival-v2";
import VideoV3 from "./section-components/video-v3";
import LatestArticleV5 from "./section-components/latest-article-v5";
import SubscriberV3 from "./section-components/subscriber-v3";
import Instagram from "./section-components/instagram-v4";
import Delivery from "./section-components/delivery-v4";
import Footer from "./global-components/footer-v2";

const Home_V5 = () => {
  return (
    <div>
      <NavbarV5 />
      <Sliderv5 />
      <CollectionSliderV2 />
      <NewArrivalV2 customclass="padding-top-85" />
      <VideoV3 />
      <LatestArticleV5 />
      <SubscriberV3 />
      <Instagram />
      <Delivery />
      <Footer />
    </div>
  );
};

export default Home_V5;
