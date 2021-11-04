import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../components/app";
import HomePage1 from "../components/home/home-1";
import HomePage2 from "../components/home/home-2";
import HomePage3 from "../components/home/home-3";
import HomePage4 from "../components/home/home-4";
import HomePage5 from "../components/home/home-5";
import HomePage6 from "../components/home/home-6";
import HomePage7 from "../components/home/home-7";
import HomePage8 from "../components/home/home-8";

export default function HomeRoute() {
  const getHomePage = (page) => {
    switch (page) {
      case 1:
        return HomePage1;
      case 2:
        return HomePage2;
      case 3:
        return HomePage3;
      case 4:
        return HomePage4;
      case 5:
        return HomePage5;
      case 6:
        return HomePage6;
      case 7:
        return HomePage7;
      case 8:
        return HomePage8;
      default:
        return HomePage1;
    }
  };
  return (
    <Switch>
      <Layout>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={getHomePage(8)}
        />
      </Layout>
    </Switch>
  );
}
