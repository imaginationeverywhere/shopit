import React from "react";
import { Link } from "react-router-dom";
import classes from '../admin/styles/sidebar.module.scss';

function Sidebar() {
  return (
    <nav className={classes.sidebar}>
      <ul className="mobile-menu">
        <li>
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/admin/dashboard`}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={`${process.env.PUBLIC_URL}/admin/templates`}
            className="sf-with-ul"
          >
            Templates
          </Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/admin/users`}>Users</Link>  
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
