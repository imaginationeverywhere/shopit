import products from "../../../backend/data/products.json";

const productHandler = async (req, res) => {
  res.status(200).json(products);
};

export default productHandler;
