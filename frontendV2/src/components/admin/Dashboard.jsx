import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Card from "./ui/Card";
import classes from "./styles/style.module.scss";

function Dashboard() {
  const { products } = useSelector((state) => state.data);
  const { templates } = useSelector((state) => state.templates);

  const getOutOfStockCount = () => {
    let count = 0;
    for (let i = 0; i < products.length; i++) {
      if (products[i].stock === 0) {
        count++;
      }
    }
    return count;
  };
  return (
    <>
      <Helmet>
        <title>Shopit|Admin baba</title>
      </Helmet>
      <div className={classes["admin-content-wrapper"]}>
        <h3>Dashboard</h3>
        <div style={{ marginBottom: "10px" }}>
          <Card
            title="Total Amount"
            amount="12,000,000"
            unit="$"
            hasBottom={false}
          />
        </div>
        <div className={classes["admin-dashboard-container"]}>
          <Card
            title="Products"
            amount={products && products.length}
            link="admin/products"
            hasBottom={true}
          />
          <Card
            title="Orders"
            amount="123"
            hasBottom={true}
            link="admin/products"
          />
          <Card
            title="Templates"
            amount={templates.length}
            hasBottom={true}
            link="admin/templates"
          />
          <Card
            title="Out of Stock"
            amount={getOutOfStockCount()}
            hasBottom={false}
            link="admin/products"
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
