import React from 'react';
import './DashboardInput.scss';

const DashboardInput = ({
  labelName,
  name,
  type,
  required,
  value,
  disabled,
  ...rest
}) => {
  return (
    <div className={`dashboardinput ${disabled ? 'disabled' : ''}`}>
      <label htmlFor={`input-${name}`}>
        {labelName}
        {required && <small className="asterik ml-1">*</small>}
      </label>
      <input
        autoComplete="off"
        id={`input-${name}`}
        name={name}
        type={type || 'text'}
        required={required}
        value={value || ''}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default DashboardInput;
