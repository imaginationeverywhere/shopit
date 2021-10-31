import { Fragment } from "react";
import Product from "../layout/product/Product.jsx";

import products from "../../backend/data/products.json";

export default function Home() {
  return (
    <Fragment>
      <h1 className="product-heading">Latest Products</h1>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.name} product={product} />;
        })}
      </div>
    </Fragment>
  );
}

