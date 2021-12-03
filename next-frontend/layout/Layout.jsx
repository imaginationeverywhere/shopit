import { Fragment } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
