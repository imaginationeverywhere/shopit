import React, { useEffect } from 'react';
import './ProductCreate.scss';
import { useState } from 'react';
// import { useItemDispatch, useItemState } from '../../context/ItemContext';
// import useUpload from '../../customHook/useUpload';
import useForm from '../customHook/useForm';
import NewProductNav from './NewProductNav';
import ProductImages from './ProductImages';
import ProductForm from './ProductForm';
import { toast } from "react-toastify";
import Skeleton from '../common/components/Skeleton';
import { getSelectValues, getUpdateProductDetails, getUpdateProductImages } from '../utils/helpers';
import { addProducts, updateProducts } from '../../../api';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../../../store';
import { getAllProducts } from '../../../actions';
// import { useParams } from 'react-router-dom';
// import {
//   getUpdateProductDetails,
//   getUpdateProductImages,
// } from '../../utils/helpers';

const getStrFromUrlsObj = (images, imageObj) => {
  const imgArrWithUrl = [];
  Object.keys(imageObj).forEach((eleKey) => {
    if (typeof imageObj[eleKey] === 'string') {
      imgArrWithUrl.push(imageObj[eleKey]);
    }
  });
  // images.forEach(({ url }) => {
  //   imgArrWithUrl.push(url);
  // });

  let str = '';

  // imgArrWithUrl.forEach((url, index) => {
  //   str += index + 1 < imgArrWithUrl.length ? `${url},` : url;
  // });

  return str;
};

const defaultImageValue = {
  picture1: '',
  picture2: '',
  picture3: '',
  picture4: '',
  smPicture1: '',
  smPicture2: '',
  smPicture3: '',
  smPicture4: '',
}

const defaultProductValues = {
  name: '',
  shortDesc: '',
  price: 0,
  distance: 0,
  weight: 0,
  length: 0,
  width: 0,
  height: 0,
  mass: 0,
  category: null,
  brands: null,
  sizes: null,
  stock: 0,
  variants: null,
}

const ProductCreate = ({ match }) => {
   // get id params from url
  const productId = match && match.params && match.params.productId;
  const { products } = useSelector((state) => state.data);
  const [imageObj, setImageObj] = useState(defaultImageValue);
  const setImage = (name, file) => {
    setImageObj((prev) => ({ ...prev, [name]: file }));
  };

  const singleProduct = products && products.find((product) => product.id === productId);

  // const { setFiles, urls, loading: imgUrlLoading } = useUpload();
  const [addProductLoading, setAddProductLoading] = useState(false);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
  const { formValues, handleChange, resetForm, checkAllRequired } = useForm(defaultProductValues);


  const genericLoading = productId ? isUpdatingProduct : addProductLoading;



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
        body
      });

      if(res.data) {
        toast.success('Product added successfully');
        setImageObj(defaultImageValue);
        resetForm(defaultProductValues)
      }
    } catch (error) {
      console.log(error.message)
       toast.error('Something went wrong');
    }
    setAddProductLoading(false);
  }

  const upateExistingProduct = async (body) => {
    setIsUpdatingProduct(true);
    try {
      const res = await updateProducts({
        body,
        id: productId
      });

      if(res.data) {
        toast.success('Product updated successfully');
      }
    } catch (error) {
      console.log(error.message)
       toast.error('Something went wrong');
    }
    setIsUpdatingProduct(false);
  }

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
      ...imageObj
    }

    const myApiForm = new FormData();
    Object.keys(req).forEach((key) => {
      myApiForm.append(key, req[key] || '');
    });
    const func = productId ? upateExistingProduct : createNewProduct;
    await func(myApiForm);
    store.dispatch( getAllProducts() );
  };

  return (
      <div className='productcreate'>
        <form
          autoComplete='off'
          onSubmit={handleSubmit}
          className='new-product-div'
        >
          {productId && !singleProduct ? (
            <Skeleton height='80vh' />
          ) : (
            <>
              <NewProductNav
                updateType={!!productId}
                resetForm={resetForm}
                checkAllRequired={checkAllRequired}
                submitLoading={genericLoading}
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
      </div>
  );
};

export default withRouter(ProductCreate);
