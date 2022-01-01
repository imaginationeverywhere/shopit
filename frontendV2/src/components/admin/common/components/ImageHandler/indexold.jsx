import React from "react";
import "./ImageHandler.scss";
import { useState } from "react";
import PlusIconNew from "../../../ProductCreate/SVGs/PlusIconNew";
// import { useToastFuncs } from '../../context/ToastContexts';
import Trash from "../../../ProductCreate/SVGs/Trash";
import { useEffect } from "react";

const ImageHandler = ({ image, setImage, name, primary }) => {
  const [localImageUrl, setLocalImageUrl] = useState(null);
  const [dragging, setDragging] = useState(false);
  // const Toast = useToastFuncs();

  const loadFilePath = async (file) => {
    const readPath = new FileReader();
    readPath.readAsDataURL(file);
    readPath.onload = (e) => setLocalImageUrl(e.target.result);
  };

  const validateFile = (files) => {
    const [imgFile] = files;
    const { size, type } = imgFile;
    const threeMB = 3000000;
    if (size < threeMB || type.split("/")[0] === "image") {
      return imgFile;
    }
    // Toast.error(
    //   'Invalid image. file must be an image and must not be greater than 3mb'
    // );
    return false;
  };

  const handleChange = (event) => {
    const [pictureFile] = event.target.files;
    setImage(name, pictureFile);
    loadFilePath(pictureFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      !dragging && setDragging(true);
    }
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      !dragging && setDragging(true);
    }
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      dragging && setDragging(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging && setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const { files } = e.dataTransfer;
      const newImg = validateFile(files);
      if (newImg) {
        loadFilePath(newImg);
        setImage(name, newImg);
      }
      e.dataTransfer.clearData();
    }
  };
  return (
    <div className={`imagehandler ${localImageUrl ? "has-image" : ""}`}>
      <>
        <label
          htmlFor={`${name}_changePhoto`}
          className={`upload-here flexed-column-center ${
            dragging ? "drag" : localImageUrl || image ? "" : "opace-sect"
          }`}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {image ? (
            <img src={localImageUrl || image} alt="product pic" />
          ) : (
            <div className="drag-here flexed-column-center">
              {primary && <span>Primary image</span>}
              <PlusIconNew />
              <p>{dragging ? "Drop Image here" : "Drag or click to upload"}</p>
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
          onClick={() => {
            setImage(name, null);
            setLocalImageUrl(null);
          }}
          className="delete-btn flexed-center"
        >
          <Trash color="#C8372D" />
        </div>
      )}
    </div>
  );
};

export default ImageHandler;
