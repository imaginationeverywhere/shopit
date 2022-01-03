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
import { getAdminProducts } from '../../../actions';
import ConfirmModal from './ConfirmModal';

const defaultImageValue = {
  picture1: null,
  picture2: null,
  picture3: null,
  picture4: null,
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
  const { adminProducts: products } = useSelector(state => state.data);
  const [imageObj, setImageObj] = useState(defaultImageValue);
  const setImage = (name, imageObj) => {
    setImageObj(prev => ({ ...prev, [name]: imageObj }));
  };

  const search = history?.location?.search;
  const getQuery = name => new URLSearchParams(search)?.get(name);

  useEffect(() => {
    const shouldShow = getQuery('open-image');
    if (shouldShow) {
      setShowProductImages(true);
    }
  }, [history?.location?.search]);

  const singleProduct =
    products && products.find(product => product.id === productId);

  const [addProductLoading, setAddProductLoading] = useState(false);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
  const [isDeletingProduct, setIsDeletingProduct] = useState(false);
  const [showProductImages, setShowProductImages] = useState(false);
  const { formValues, handleChange, resetForm, checkAllRequired } = useForm(
    defaultProductValues,
  );
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
      store.dispatch(getAdminProducts());
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
      setImageObj(prev => ({
        ...prev,
        ...getUpdateProductImages(singleProduct),
      }));
    }
  }, [singleProduct, productId]);

  const createNewProduct = async body => {
    setAddProductLoading(true);
    try {
      const res = await addProducts({
        body,
      });
      console.log(res);
      if (res?.data?.product?._id) {
        toast.success('Product added successfully');
        history.push(
          `/admin/products/edit/${res.data.product?._id}?open-image=true`,
        );
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong');
    }
    setAddProductLoading(false);
  };

  const upateExistingProduct = async body => {
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

  const closeModal = () => {
    const showModal = getQuery('open-image');
    if (showModal) {
      setShowProductImages(false);
      history.push(`/admin/products/edit/${productId}`);
    } else {
      setShowProductImages(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const {
      distance_unit,
      weight,
      length,
      width,
      height,
      mass_unit,
      ...rest
    } = formValues;
    const parcel = {
      distance_unit,
      weight,
      length,
      width,
      height,
      mass_unit,
    };
    const req = {
      ...rest,
      parcel,
      category: getSelectValues(formValues.category),
      sizes: getSelectValues(formValues.sizes),
      brands: getSelectValues(formValues.brands),
      variants: formValues.variants.map(variant => ({ color: variant })),
    };

    const func = productId ? upateExistingProduct : createNewProduct;
    await func(req);
    store.dispatch(getAdminProducts());
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
            <ProductForm
              payload={singleProduct}
              loading={genericLoading}
              updateType={!!productId}
              formValues={formValues}
              handleChange={handleChange}
              setShowProductImages={!!productId && setShowProductImages}
              productImages={singleProduct?.productImages}
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
      {showProductImages && productId && (
        <ProductImages
          handleSubmit={handleSubmit}
          imageObj={imageObj}
          setImage={setImage}
          loading={genericLoading}
          productId={productId}
          closeModal={closeModal}
          refetch={() => store.dispatch(getAdminProducts())}
        />
      )}
    </div>
  );
};

export default withRouter(ProductCreate);
