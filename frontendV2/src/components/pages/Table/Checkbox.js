import React from 'react';
import classes from '../../userAdmin/styles/cart.module.scss';
const Checkbox = ({ value, handleCheckboxChange, row, index }) => {
  const { servicelevel: { token: valueToken } = {} } = value;
  const { servicelevel: { token: rowToken } = {} } = row;

  return (
    <>
      <div className={classes['checkbox-wrap']}>
        <input
          type="radio"
          id={`${valueToken + index}`}
          name="radio-group"
          checked={valueToken && rowToken === valueToken}
          onChange={() => handleCheckboxChange(row)}
        />
        <label htmlFor={`${valueToken + index}`}></label>
      </div>
    </>
  );
};

export default Checkbox;
