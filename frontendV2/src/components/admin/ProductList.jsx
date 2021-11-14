import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import classes from "./styles/product-list.module.scss";

export const ProductList = () => {
  const { products } = useSelector((state) => state.data);

  console.log(products);
  return (
    <>
      <Helmet>
        <title>Shopit|Admin Templates</title>
      </Helmet>
      <h2>Products</h2>
      <div className={classes["product-table-container"]}>
        <table className={classes["product-table"]}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Stock</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, name, price, stock }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td className={classes["product-name"]}>{name}</td>
                  <td>{price}</td>
                  <td>{stock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
