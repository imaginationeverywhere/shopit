import Skeleton from 'components/admin/common/components/Skeleton';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSingleProductAction } from '../actions';
import store from '../store';

const withSingleProduct = (Component) => (props) => {
  console.log('higher order function', props);
  const { singleProduct } = useSelector((state) => state.data);
  useEffect(() => {
    if (props?.match?.params?.id) {
      const id = props?.match?.params?.id;
      if (singleProduct?.id !== id) {
        store.dispatch(getSingleProductAction(id));
      }
    }
  }, [props?.match?.params?.id]);
if(!singleProduct) {
  return <div><Skeleton height="500px" /></div>
}
  return <Component {...props} />;
};

export default withSingleProduct;
