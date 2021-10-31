import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img
        className="product-image"
        src={product.images[0].url}
        alt={product.name}
      />
      <div className="product-body">
        <Link href={`/product/${product._id}`}>
          <h5 className="product-name">{product.name}</h5>
        </Link>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(product.ratings / 5) * 100}%` }}
            ></div>
          </div>
          <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
        </div>
        <p className="card-text">${product.price}</p>
        <Link href={`/product/${product._id}`}>
          <a className="btn" id="view_btn">
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
