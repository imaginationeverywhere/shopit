import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSingleProductAction } from '../actions';
import store from '../store';

const withSingleProduct = Component => props => {
  console.log('higher order function', props);
  const { products, singleProduct } = useSelector(state => state.data);
  useEffect(() => {
    if (props?.match?.params?.id) {
      const id = props?.match?.params?.id;
      console.log(id, 'PRODUCTID');
      // const hasProduct = products.find(product => product.id === id);
      if (singleProduct?.id !== id) {
        store.dispatch(getSingleProductAction(id));
      }
    }
  }, [props?.match?.params?.id]);

  return <Component {...props} />;
};

export default withSingleProduct;