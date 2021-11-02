import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../layout/product/Product.jsx";
import Search from "../layout/Search.jsx";
import { getProducts } from "../../frontend/src/actions/productActions.js";
import store from "../redux/store";
import { useAlert } from "react-alert";
import products from "../../backend/data/products.json";

export const  Home = ({productList}) => {
  //const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = 'match.params.keyword';


  useEffect(() => {
    if (error) {
      return alert.error(error);s
    }

    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, error, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }

  return (
    <main>
      <Search className="search-body" />
      <h1 className="product-heading">Latest Products</h1>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.name} product={product} />;
        })}
      </div>
    </main>
  );
}

export const getServerProps = async (context) => {
  const products = store.dispatch(getState());
  return {
    props: {
      productList: products,
    }
  };
};

export default Home;


