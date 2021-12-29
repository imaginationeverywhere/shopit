// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./Loading.scss";

const Loading = ({ classes, color }) => (
  <div
    style={{ borderColor: color || "#c66" }}
    className={`loading-icon ${classes || ""}`}
  />
);

Loading.propTypes = {
  classes: PropTypes.string,
  color: PropTypes.string,
};

export default Loading;
