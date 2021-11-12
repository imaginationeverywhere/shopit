import React from "react";
import { Link } from "react-router-dom";
import classes from "../style.module.scss";

const Card = ({ title, amount, unit }) => {
  return (
    <div className={classes[`admin-card`]}>
      <div className="admin-card-details">
        <h5 className={classes["admin-card-title"]}>{title}</h5>
        <span className={classes["admin-card-quantity"]}>
          {unit} {amount}
        </span>
      </div>

      <div className={classes["admin-card-bottom"]}>
        <div className={classes["admin-card-link"]}>
          <Link to="/">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
