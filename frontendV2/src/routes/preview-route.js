import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { previewTemplate } from "../actions";
import axios from "axios";
import Layout from "../components/app";
import HomePage1 from "../components/home/home-1";
import HomePage2 from "../components/home/home-2";
import HomePage3 from "../components/home/home-3";
import HomePage4 from "../components/home/home-4";
import HomePage5 from "../components/home/home-5";
import HomePage6 from "../components/home/home-6";
import HomePage7 from "../components/home/home-7";
import HomePage8 from "../components/home/home-8";
import HomePage9 from "../components/home/home-9";
import HomePage10 from "../components/home/home-10";
import HomePage11 from "../components/home/home-11";
import HomePage12 from "../components/home/home-12";
import HomePage13 from "../components/home/home-13";
import HomePage14 from "../components/home/home-14";
import HomePage15 from "../components/home/home-15";
import HomePage16 from "../components/home/home-16";
import HomePage17 from "../components/home/home-17";
import HomePage18 from "../components/home/home-18";
import HomePage19 from "../components/home/home-19";
import HomePage20 from "../components/home/home-20";
import HomePage21 from "../components/home/home-21";
import HomePage22 from "../components/home/home-22";
import HomePage23 from "../components/home/home-23";
import HomePage24 from "../components/home/home-24";


export default function PreviewRoute() {
  const { id } = 2;

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
      case 9:
        return HomePage9;
      case 10:
        return HomePage10;
      case 11:
        return HomePage11;
      case 12:
        return HomePage12;
      case 13:
        return HomePage13;
      case 14:
        return HomePage14;
      case 15:
        return HomePage15;
      case 16:
        return HomePage16;
      case 17:
        return HomePage17;
      case 18:
        return HomePage18;
      case 19:
        return HomePage19;
      case 20:
        return HomePage20;
      case 21:
        return HomePage21;
      case 22:
        return HomePage22;
      case 23:
        return HomePage23;
      case 24:
        return HomePage24;
      default:
        return HomePage1;
    }
  };

  return (
    <Switch>
    <Layout>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/templates/preview/${id}`}
        component={getHomePage(+id)}
      />
      </Layout>
    </Switch>
  );
}
