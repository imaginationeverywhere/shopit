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
import Skeleton from './components/Skeleton';
import { getSelectValues } from './utils/helpers';
import Axios from 'axios';
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

const ProductCreate = () => {
  const [imageObj, setImageObj] = useState({
    picture1: null,
    picture2: null,
    picture3: null,
    picture4: null,
    smPicture1: null,
    smPicture2: null,
    smPicture3: null,
    smPicture4: null,
  });
  const setImage = (name, file) => {
    setImageObj((prev) => ({ ...prev, [name]: file }));
  };

  // const { addProduct, updateProduct } = useItemDispatch();

  // const {
  //   addProductSuccess,
  //   addProductLoading,
  //   isUpdatingProduct,
  // } = useItemState();

  // const { setFiles, urls, loading: imgUrlLoading } = useUpload();
  const [addProductLoading, setAddProductLoading] = useState(false);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
  const { formValues, handleChange, resetForm, checkAllRequired } = useForm({
    name: 'new prod',
    shortDesc: 'desc',
    price: 123,
    distance: 20,
    weight: 30,
    length: 30,
    width: 30,
    height: 30,
    mass: 30,
    category: null,
    brand: null,
    size: null,
    stock: 45,
    variants: null,
  });

  // const { getSingleProduct } = useItemDispatch();
  // const { singleProductLoading, singleProduct } = useItemState();
  const { productId } = {};

  const genericLoading = productId ? isUpdatingProduct : addProductLoading;

  const submitItem = () => {
    // const urlsInStr = getStrFromUrlsObj(urls, imageObj);
    // const dataInput = {
    //   variables: {
    //     ...(productId ? { id: productId } : {}),
    //     input: {
    //       ...formValues,
    //       isFreeShipping: Boolean(formValues.isFreeShipping),
    //       isPayOnDelivery: Boolean(formValues.isPayOnDelivery),
    //       weight: Number(formValues.weight),
    //       price: Number(formValues.price),
    //       initialPrice: Number(formValues.price),
    //       quantity: Number(formValues.quantity),
    //       primaryImage:
    //         urls.length && typeof imageObj.image1 === 'object'
    //           ? urls[0].url
    //           : singleProduct.product.primaryImage,
    //       images: urlsInStr,
    //       maxReturnPeriod: 3,
    //     },
    //     attributeOptionIds,
    //   },
    // };
    // productId ? updateProduct(dataInput) : addProduct(dataInput);
  };

  // useEffect(() => {
  //   if (addProductSuccess) {
  //     resetForm();
  //     setImageObj({
  //       image1: null,
  //       image2: null,
  //       image3: null,
  //       image4: null,
  //     });
  //   }
  // }, [addProductSuccess]);

  // useEffect(() => {
  //   productId &&
  //     getSingleProduct({
  //       variables: { id: productId, offset: 0, limit: 0, filter: '' },
  //     });
  // }, []);

  // const makeSubmission = () => {
  //   if (checkAllRequired(['isFreeShipping', 'isPayOnDelivery'])) {
  //     submitItem();
  //   } else {
  //     Toast.error('Please enter all required fields');
  //   }
  // };

  // useEffect(() => {
  //   if (urls) {
  //     makeSubmission();
  //   }
  // }, [urls]);

  // useEffect(() => {
  //   if (productId && !singleProductLoading && singleProduct.product) {
  //     resetForm(getUpdateProductDetails(singleProduct));
  //     setImageObj(getUpdateProductImages(singleProduct));
  //   }
  // }, [singleProduct, singleProductLoading, productId]);
  

  const addProduct = async (body) => {
    setAddProductLoading(true);
    try {

      const res = await Axios({
        method: 'post',
        url: 'http://localhost:5000/api/v1/products',
        data: body,
      });

      if(res.data) {
        console.log(res.data);
        toast.success('Product added successfully');
      }
    } catch (error) {
      console.log(error.message)
       toast.error('Something went wrong');
    }
    setAddProductLoading(false);
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
    // const imagesArr = Object.values(imageObj).filter(
    //   (fileImg) => fileImg && typeof fileImg === 'object'
    // );

    // imagesArr.length ? setFiles(imagesArr) : makeSubmission();
    const myApiForm = new FormData();
    Object.keys(req).forEach((key) => {
      myApiForm.append(key, req[key]);
    });
    await addProduct(myApiForm);
  };

  return (
      <div className='productcreate'>
        <form
          autoComplete='off'
          onSubmit={handleSubmit}
          className='new-product-div'
        >
          {productId ? (
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
                // payload={singleProduct.product}
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

export default ProductCreate;
