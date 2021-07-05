import React from "react";

const Checkbox = ({ value, handleCheckboxChange, row }) => {
  const { servicelevel: { token: valueToken } = {} } = value;
  const { servicelevel: { token: rowToken } = {} } = row;
  return (
    <input
      type="checkbox"
      checked={valueToken && valueToken === rowToken}
      onChange={() => handleCheckboxChange(row)}
    />
  );
};

export default Checkbox;
