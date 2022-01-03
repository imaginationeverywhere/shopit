import React from 'react';
import './Select.scss';
import SelectSearchComp from 'react-select';
import { getValue } from '../../../utils/helpers';

const Select = ({
  options,
  label,
  name,
  onChange,
  classes,
  value,
  placeholder,
  hideLabel,
  required,
  ...rest
}) => {
  const handleChange = (e) => {
    onChange({ target: { value: e.value, name } });
  };

  return (
    <div className="select">
      {!hideLabel && (
        <span className="label-name flexed-row">
          {label}
          {required && <small className="asterik ml-1 flexed-center ">*</small>}
        </span>
      )}
      <div className={`dash-select-search ${classes || ''}`}>
        <SelectSearchComp
          placeholder={placeholder}
          onChange={handleChange}
          className="basic-single"
          value={getValue(options, value)}
          options={options}
          required={required}
        />
      </div>
    </div>
  );
};

export default Select;
