import React from "react";
import { Helmet } from "react-helmet";
import Card from "./ui/Card";
import classes from "./styles/style.module.scss";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Shopit|Admin baba</title>
      </Helmet>
      <div className={classes["page-wrapper"]}>
          <h3>Dashboard</h3>
        <div style={{marginBottom: '10px'}}>
          <Card title="Total Amount" amount="12,000,000" unit="$" />
        </div>
        <div className={classes["admin-dashboard-container"]}>
          <Card title="Products" amount="guedhwi" />
          <Card title="Orders" amount="guedhwi" />
          <Card title="Users" amount="guedhwi" />
          <Card title="Out of Stock" amount="guedhwi" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
