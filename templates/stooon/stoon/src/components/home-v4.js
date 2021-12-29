import React from "react";
import NavbarV4 from "./global-components/navbar-v4";
import Sliderv4 from "./section-components/slider-v4";
import CollectionBannerV4 from "./section-components/collection-banner-v4";
import NewArrival from "./section-components/new-arrival";
import Todaydeal from "./section-components/today-deal";
import Trending from "./section-components/trending";
import BrandV3 from "./section-components/brand-v3";
import LatestArticleV4 from "./section-components/latest-article-v4";
import SubscriberV3 from "./section-components/subscriber-v3";
import Instagram from "./section-components/instagram-v4";
import Delivery from "./section-components/delivery-v4";
import Footer from "./global-components/footer-v2";

const Home_V2 = () => {
  return (
    <div>
      <NavbarV4 />
      <Sliderv4 />
      <CollectionBannerV4 />
      <NewArrival />
      <Todaydeal />
      <Trending />
      <BrandV3 />
      <LatestArticleV4 />
      <SubscriberV3 />
      <Instagram />
      <Delivery />
      <Footer />
    </div>
  );
};

export default Home_V2;
