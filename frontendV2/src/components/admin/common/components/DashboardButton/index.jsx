/* eslint-disable react/button-has-type */
// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./DashboardButton.scss";

// components
import Loading from "../Loading";

const DashboardButton = ({
  loading,
  name,
  type,
  loadingClass,
  loadingColor,
  onClick,
  disabled,
  classes,
  colored,
}) => (
  <button
    className={`dashboardbutton  ${colored ? "colored-blue" : ""} ${classes} ${
      disabled ? (colored ? "colored-grey" : "grey") : ""
    } `}
    type={type || "button"}
    onClick={onClick}
    name={name}
    disabled={disabled || loading}
  >
    <span>{name}</span>
    {loading && <Loading color={loadingColor} classes={loadingClass} />}
  </button>
);

DashboardButton.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  type: PropTypes.string,
  loadingClass: PropTypes.string,
  loadingColor: PropTypes.string,
  Icon: PropTypes.func,
};

export default DashboardButton;
