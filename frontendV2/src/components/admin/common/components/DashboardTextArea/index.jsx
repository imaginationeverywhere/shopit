import React from 'react';
import './DashboardTextArea.scss';

const DashboardTextArea = ({ labelName, name, type, required, ...rest }) => {
  return (
    <div className="dashboard-text-area">
      <label htmlFor={`input-${name}`}>
        {labelName} {required && <small className="asterik ml-1">*</small>}
      </label>
      <textarea
        id={`input-${name}`}
        name={name}
        type={type || 'text'}
        {...rest}
        required={required}
      />
    </div>
  );
};

export default DashboardTextArea;
