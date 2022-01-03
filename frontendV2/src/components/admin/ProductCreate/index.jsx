import React, { useEffect } from 'react';
import './ProductCreate.scss';
import { useState } from 'react';
import useForm from '../customHook/useForm';
import NewProductNav from './NewProductNav';
import ProductImages from './ProductImages';
import ProductForm from './ProductForm';
import { toast } from 'react-toastify';
import Skeleton from '../common/components/Skeleton';
import {
  getSelectValues,
  getUpdateProductDetails,
  getUpdateProductImages,
} from '../utils/helpers';
import { addProducts, deleteProducts, updateProducts } from '../../../api';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../../../store';
import { getAllProducts } from '../../../actions';
import ConfirmModal from './ConfirmModal';

const defaultImageValue = {
  picture1: '',
  picture2: '',
  picture3: '',
  picture4: '',
  smPicture1: '',
  smPicture2: '',
  smPicture3: '',
  smPicture4: '',
};

const defaultProductValues = {
  name: '',
  shortDesc: '',
  price: 0,
  distance_unit: 'in',
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
  mass_unit: 'lb',
  category: null,
  brands: null,
  sizes: null,
  stock: 0,
  variants: null,
};

const ProductCreate = ({ match, history }) => {
  // get id params from url
  const productId = match && match.params && match.params.productId;
  const { products } = useSelector((state) => state.data);
  const [imageObj, setImageObj] = useState(defaultImageValue);
  const setImage = (name, file) => {
    setImageObj((prev) => ({ ...prev, [name]: file }));
  };

  const singleProduct =
    products && products.find((product) => product.id === productId);

  const [addProductLoading, setAddProductLoading] = useState(false);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
  const [isDeletingProduct, setIsDeletingProduct] = useState(false);
  const { formValues, handleChange, resetForm, checkAllRequired } =
    useForm(defaultProductValues);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const genericLoading = productId
    ? isUpdatingProduct || isDeletingProduct
    : addProductLoading;

  const handleDelete = async () => {
    setIsDeletingProduct(true);
    try {
      await deleteProducts({ id: productId });
      toast.success('Product deleted successfully');
      // get all products
      store.dispatch(getAllProducts());
      // push to products page
      history.push('/admin/products');
    } catch (error) {
      toast.error('Error deleting product');
    }
    setIsDeletingProduct(false);
  };

  useEffect(() => {
    if (productId && singleProduct && !formValues.name) {
      resetForm(getUpdateProductDetails(singleProduct));
      setImageObj(getUpdateProductImages(singleProduct));
    }
  }, [singleProduct, productId]);

  const createNewProduct = async (body) => {
    setAddProductLoading(true);
    try {
      const res = await addProducts({
        body,
      });

      if (res.data) {
        toast.success('Product added successfully');
        setImageObj(defaultImageValue);
        resetForm(defaultProductValues);
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong');
    }
    setAddProductLoading(false);
  };

  const upateExistingProduct = async (body) => {
    setIsUpdatingProduct(true);
    try {
      const res = await updateProducts({
        body,
        id: productId,
      });

      if (res.data) {
        toast.success('Product updated successfully');
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong');
    }
    setIsUpdatingProduct(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageObj.picture1) {
      toast.error('Primary image is required');
      return;
    }

    const req = {
      ...formValues,
      category: getSelectValues(formValues.category),
      sizes: getSelectValues(formValues.sizes),
      brands: getSelectValues(formValues.brands),
      variants: formValues.variants.join(', '),
      ...imageObj,
    };

    const myApiForm = new FormData();
    Object.keys(req).forEach((key) => {
      myApiForm.append(key, req[key] || '');
    });
    const func = productId ? upateExistingProduct : createNewProduct;
    await func(myApiForm);
    store.dispatch(getAllProducts());
  };

  return (
    <div className="productcreate">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="new-product-div"
      >
        {productId && !singleProduct ? (
          <Skeleton height="80vh" />
        ) : (
          <>
            <NewProductNav
              updateType={!!productId}
              resetForm={resetForm}
              checkAllRequired={checkAllRequired}
              submitLoading={genericLoading}
              deleteProduct={() => setShowDeleteConfirmModal(true)}
            />
            <ProductImages
              updateType={!!productId}
              handleSubmit={handleSubmit}
              imageObj={imageObj}
              setImage={setImage}
              loading={genericLoading}
            />
            <ProductForm
              payload={singleProduct}
              loading={genericLoading}
              updateType={!!productId}
              formValues={formValues}
              handleChange={handleChange}
            />
          </>
        )}
      </form>
      {showDeleteConfirmModal && (
        <ConfirmModal
          loading={isDeletingProduct}
          onSubmit={handleDelete}
          closeModal={() => setShowDeleteConfirmModal(false)}
        />
      )}
    </div>
  );
};

export default withRouter(ProductCreate);
