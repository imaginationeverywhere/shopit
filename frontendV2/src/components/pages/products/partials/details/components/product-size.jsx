import React from 'react';

export const ProductSize = () => {
  return (
    <>
      <label htmlFor="size">Size:</label>
      <div className="select-custom">
        <select name="size" id="size" className="form-control" defaultValue="#">
          <option value="#">Select a size</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>
    </>
  );
};
