import React, { useEffect, useState } from 'react';
import './ImageHandler.scss';
import PlusIconNew from '../../../ProductCreate/SVGs/PlusIconNew';
// import { useToastFuncs } from '../../context/ToastContexts';
import Trash from '../../../ProductCreate/SVGs/Trash';
import { toast } from 'react-toastify';
import {
  addProductImage,
  updateProductImage,
  deleteProductImage,
} from '../../../../../api';
const loadingGif =
  'https://res.cloudinary.com/dflmq4zxb/image/upload/v1641046969/loaderGif_um59qb.gif';

const ImageLoading = () => (
  <img className="loading-img" src={loadingGif} alt="product loading pic" />
);

const ImageHandler = ({
  image,
  setImage,
  name,
  primary,
  productId,
  refetch,
}) => {
  const [localImageUrl, setLocalImageUrl] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  // const Toast = useToastFuncs();
  const withLoading = async func => {
    setIsImageUploading(true);
    try {
      await func();
    } catch (error) {
      // log error
      console.log(error);
      toast.error(error.message);
    }
    setIsImageUploading(false);
  };

  const createProductImage = async file => {
    const formData = new FormData();
    formData.append('productImage', file);
    formData.append('name', name);
    const response = await addProductImage({
      productId,
      body: formData,
    });
    if (response?.data) {
      const data = response.data.imageObj;
      console.log(data);
      setImage(name, data);
    }
  };

  const modifyProductImage = async file => {
    const formData = new FormData();
    formData.append('productImage', file);
    formData.append('imagePublicId', image.publicId);
    const response = await updateProductImage({
      productId,
      body: formData,
    });

    if (response?.data) {
      const imgObj = response.data.imageObj;
      setImage(name, imgObj);
    }
  };

  const removeImage = async () => {
    await deleteProductImage({
      productId,
      body: { imagePublicId: image.publicId },
    });
    setImage(name, null);
    setLocalImageUrl(null);
  };

  const validateFile = files => {
    const [imgFile] = files;
    const { size, type } = imgFile;
    const threeMB = 3000000;
    if (size < threeMB || type.split('/')[0] === 'image') {
      return imgFile;
    }
    // Toast.error(
    //   'Invalid image. file must be an image and must not be greater than 3mb'
    // );
    return false;
  };

  const loadFilePath = async pictureFile => {
    console.log(image?.url);
    image?.url
      ? await withLoading(() => modifyProductImage(pictureFile))
      : await withLoading(() => createProductImage(pictureFile));
    refetch();
  };
  const handleChange = event => {
    const [pictureFile] = event.target.files;
    loadFilePath(pictureFile);
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      !dragging && setDragging(true);
    }
  };
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      !dragging && setDragging(true);
    }
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      dragging && setDragging(false);
    }
  };
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    dragging && setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const { files } = e.dataTransfer;
      const newImg = validateFile(files);
      if (newImg) {
        loadFilePath(newImg);
        // setImage(name, newImg);
      }
      e.dataTransfer.clearData();
    }
  };
  return (
    <div className={`imagehandler ${localImageUrl ? 'has-image' : ''}`}>
      <>
        <label
          htmlFor={`${name}_changePhoto`}
          className={`upload-here flexed-column-center ${
            dragging ? 'drag' : image ? '' : 'opace-sect'
          }`}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {isImageUploading ? (
            <ImageLoading />
          ) : image?.url ? (
            <img loading="lazy" src={image?.url} alt="product pic" />
          ) : (
            <div className="drag-here flexed-column-center">
              {primary && <span>Primary image</span>}
              <PlusIconNew />
              <p>{dragging ? 'Drop Image here' : 'Drag or click to upload'}</p>
            </div>
          )}
        </label>
        <input
          id={`${name}_changePhoto`}
          className="hidden"
          type="file"
          onChange={handleChange}
          accept="image/*"
          data-max-size="2000"
        />
      </>
      {image && (
        <div
          onClick={() => withLoading(removeImage)}
          className="delete-btn flexed-center"
        >
          <Trash color="#C8372D" />
        </div>
      )}
    </div>
  );
};

export default ImageHandler;
