import React from "react";
import "./DashboardSelect.scss";
import SelectSearchComp from "react-select";

const DashboardSelect = ({
  options,
  label,
  name,
  onChange,
  classes,
  value,
  placeholder,
  hideLabel,
  required,
  isMulti,
  defaultValue,
  ...rest
}) => {
  const handleChange = (value) => {
    onChange({ target: { value, name } });
  };

  return (
    <div className="dashboard-select">
      {!hideLabel && (
        <span className="label-name flexed-row">
          {label}
          {required && <small className="asterik ml-1 flexed-center ">*</small>}
        </span>
      )}
      <div className={`dash-select-search ${classes || ""}`}>
        <SelectSearchComp
          placeholder={placeholder}
          onChange={handleChange}
          className={isMulti ? "basic-multi-select" : "basic-single"}
          value={value || []}
          options={options}
          defaultValue={defaultValue || []}
          required={required}
          isMulti={true}
        />
      </div>
    </div>
  );
};

export default DashboardSelect;
