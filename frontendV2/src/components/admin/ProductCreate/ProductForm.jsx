import React from 'react';
import ColorVariantComp from './ColorVariantComp';
import DashboardInput from '../common/components/DashboardInput';
import DashboardSelect from '../common/components/DashboardSelect';

import PriceInput from '../common/components/PriceInput';
import {
  brands,
  categories,
  massList,
  sizes,
  distanceList,
} from '../utils/helpers';
import Select from '../common/components/Select';
import DashboardButton from '../common/components/DashboardButton';
import MarkdownEditor from '../common/components/MarkdownEditor/newEditor';

const ProductForm = ({
  formValues,
  handleChange,
  loading: addProductLoading,
  setShowProductImages,
  productImages,
}) => {
  const firstOrNoImage =
    productImages?.[0]?.url ||
    'https://res.cloudinary.com/dflmq4zxb/image/upload/v1641064670/noimage1_b8pkau.svg';
  return (
    <div className="product-form">
      <div className="form-main flexed-row">
        <div className="other-product-detail">
          <div className="general-form">
            <div className="product-name-info">
              <DashboardInput
                name="name"
                value={formValues.name}
                onChange={handleChange}
                labelName="Product Name"
                required
              />
                           <Select
                onChange={handleChange}
                label="Mass Unit"
                placeholder=" "
                name="mass_unit"
                value={formValues.mass_unit}
                options={massList}
                required
                disabled={addProductLoading}
              />
              <DashboardInput
                labelName="Weight"
                name="weight"
                value={formValues.weight}
                onChange={handleChange}
                type="number"
                required
                disabled={addProductLoading}
              />
            </div>
            <DashboardSelect
              onChange={handleChange}
              label="Category"
              placeholder=" "
              name="category"
              value={formValues.category}
              options={categories}
              required
              isMulti
              defaultValue={[categories[0], categories[3]]}
              disabled={addProductLoading}
            />
            <DashboardSelect
              onChange={handleChange}
              label="Brand"
              placeholder=" "
              name="brands"
              value={formValues.brands}
              options={brands}
              required
              isMulti
              disabled={addProductLoading}
            />
            <div className="weight-info">
               <DashboardSelect
              onChange={handleChange}
              label="Sizes"
              placeholder=" "
              name="sizes"
              value={formValues.sizes}
              options={sizes}
              required
              isMulti
              disabled={addProductLoading}
            />
                <DashboardInput
                labelName="Stock"
                name="stock"
                value={formValues.stock}
                onChange={handleChange}
                type="number"
                required
                disabled={addProductLoading}
              />
            </div>

            <div className="weight-info">
            <div className="weight-info">
              <Select
                onChange={handleChange}
                label="Dimensions unit"
                placeholder=" "
                name="distance_unit"
                value={formValues.distance_unit}
                options={distanceList}
                required
                disabled={addProductLoading}
              />
              <DashboardInput
                labelName="Height"
                type="number"
                name="height"
                value={formValues.height}
                disabled={addProductLoading}
                onChange={handleChange}
                required
              />
            </div>
            <div className="weight-info">
              <DashboardInput
                labelName="Length"
                type="number"
                name="length"
                value={formValues.length}
                disabled={addProductLoading}
                onChange={handleChange}
                required
              />
              <DashboardInput
                labelName="Width"
                type="number"
                name="width"
                value={formValues.width}
                disabled={addProductLoading}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            {/* <DashboardTextArea
              labelName="Description"
              name="shortDesc"
              value={formValues.shortDesc}
              onChange={handleChange}
              required
            /> */}
            <MarkdownEditor  
              labelName="Description"
              name="shortDesc"
              value={formValues.shortDesc}
              handleChange={handleChange}
              required />
          </div>
        </div>
        <div className="price-form">
          <PriceInput
            name="price"
            labelName="Price"
            value={formValues.price}
            onChange={handleChange}
            placeholder="0.00"
            required
          />

          <ColorVariantComp
            variants={formValues.variants}
            handleChange={handleChange}
          />
          {setShowProductImages && (
            <div className="show-img-wrap">
              <img
                className="product-img-placeholder"
                src={firstOrNoImage}
                alt="view-img"
                onClick={() => setShowProductImages(true)}
              />
              <DashboardButton
                classes="show-img-btn"
                name="Open Product Images"
                onClick={() => setShowProductImages(true)}
                colored
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
