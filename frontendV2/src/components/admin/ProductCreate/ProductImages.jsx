import React from 'react';
import ImageHandler from './components/ImageHandler';

const ProductImages = ({ imageObj, setImage }) => {
  return (
    <>
    <div className='image-upload-wrap'>
      <ImageHandler
        primary
        name='picture1'
        image={imageObj.picture1}
        setImage={setImage}
      />
      <ImageHandler name='picture2' image={imageObj.picture2} setImage={setImage} />
      <ImageHandler name='picture3' image={imageObj.picture3} setImage={setImage} />
      <ImageHandler name='picture4' image={imageObj.picture4} setImage={setImage} />
    </div>
    <div className='image-upload-wrap'>
      <ImageHandler
        name='smPicture5'
        image={imageObj.smPicture1}
        setImage={setImage}
      />
      <ImageHandler name='smPicture6' image={imageObj.smPicture2} setImage={setImage} />
      <ImageHandler name='smPicture7' image={imageObj.smPicture3} setImage={setImage} />
      <ImageHandler name='smPicture8' image={imageObj.smPicture4} setImage={setImage} />
    </div>
    </>
    
  );
};

export default ProductImages;