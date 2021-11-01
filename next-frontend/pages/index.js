
import Product from "../layout/product/Product.jsx";
import Search from "../layout/Search.jsx";
import products from "../../backend/data/products.json";

export default function Home({productList}) {

  return (
    <main>
      <Search className="search-body" />
      <h1 className="product-heading">Latest Products</h1>
      <div className="products">
        {productList.map((product) => {
          return <Product key={product.name} product={product} />;
        })}
      </div>
    </main>
  );
}

export const getStaticProps = async() => {
  return {
    props: {
      productList: products
    },
    revalidate: 10
  }
}
