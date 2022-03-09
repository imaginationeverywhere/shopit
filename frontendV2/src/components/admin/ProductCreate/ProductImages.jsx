import React from 'react';
import DashboardButton from '../common/components/DashboardButton';
import ImageHandler from '../common/components/ImageHandler';
import ModalWrapComp from '../common/components/ModalWrapComp';

const ProductImages = ({
  imageObj,
  setImage,
  productId,
  closeModal,
  refetch,
}) => {
  return (
    <ModalWrapComp closeModal={closeModal}>
      <div className="image-upload-wrap-border">
        <header className="flexed-space-between">
          <h5>Product Images</h5>
          <DashboardButton name="Close" onClick={closeModal} colored />
        </header>
        <div className="image-upload-wrap">
          <ImageHandler
            primary
            name="picture1"
            image={imageObj.picture1}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
          <ImageHandler
            name="picture2"
            image={imageObj.picture2}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
          <ImageHandler
            name="picture3"
            image={imageObj.picture3}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
          <ImageHandler
            name="picture4"
            image={imageObj.picture4}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
        </div>
        {/* <div className="image-upload-wrap">
          <ImageHandler
            name="smPicture1"
            image={imageObj.smPicture1}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
          <ImageHandler
            name="smPicture2"
            image={imageObj.smPicture2}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
          <ImageHandler
            name="smPicture3"
            image={imageObj.smPicture3}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
          <ImageHandler
            name="smPicture4"
            image={imageObj.smPicture4}
            setImage={setImage}
            productId={productId}
            refetch={refetch}
          />
        </div> */}
      </div>
    </ModalWrapComp>
  );
};

export default ProductImages;
