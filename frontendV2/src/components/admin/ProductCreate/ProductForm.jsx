import React from "react";
import ColorVariantComp from "./ColorVariantComp";
import DashboardInput from "../common/components/DashboardInput";
import DashboardSelect from "../common/components/DashboardSelect";
import DashboardTextArea from "../common/components/DashboardTextArea";

import PriceInput from "../common/components/PriceInput";
import { brands, categories, sizes } from "../utils/helpers";

const ProductForm = ({
  formValues,
  handleChange,
  loading: addProductLoading,
}) => {
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
              <DashboardInput
                labelName="Weight"
                name="weight"
                value={formValues.weight}
                onChange={handleChange}
                type="number"
                required
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
              <DashboardInput
                type="number"
                labelName="Distance (in)"
                name="distance"
                value={formValues.distance}
                disabled={addProductLoading}
                onChange={handleChange}
                required
              />
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
            </div>
            <DashboardTextArea
              labelName="Description"
              name="shortDesc"
              value={formValues.shortDesc}
              onChange={handleChange}
              required
            />
            <div className="weight-info mt-1">
              <div className="weight-info">
                <DashboardInput
                  labelName="Length (in)"
                  type="number"
                  name="length"
                  value={formValues.length}
                  disabled={addProductLoading}
                  onChange={handleChange}
                  required
                />
                <DashboardInput
                  labelName="Width (in)"
                  type="number"
                  name="width"
                  value={formValues.width}
                  disabled={addProductLoading}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="weight-info">
                <DashboardInput
                  labelName="Height (in)"
                  type="number"
                  name="height"
                  value={formValues.height}
                  disabled={addProductLoading}
                  onChange={handleChange}
                  required
                />
                <DashboardInput
                  labelName="Mass (lb)"
                  type="number"
                  name="mass"
                  value={formValues.mass}
                  disabled={addProductLoading}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
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
            // hintMessage='Product actual price'
          />

          <ColorVariantComp
            variants={formValues.variants}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
