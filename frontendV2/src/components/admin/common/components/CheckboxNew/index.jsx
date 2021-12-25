import React from 'react';
import './CheckboxNew.scss';
import CheckIcon from './CheckIconNew';
import Loading from '../Loading';

const CheckboxNew = ({
  id,
  children,
  name,
  onClick,
  onChange,
  value,
  loading,
}) => (
  <div className='checkbox-new'>
    <input
      id={id}
      name={name}
      checked={value}
      onChange={onChange}
      type='checkbox'
      disabled={loading}
    />
    <label onClick={() => !loading && onClick && onClick()} htmlFor={id}>
      <span>{children}</span>
      {loading ? (
        <Loading color='#003883' />
      ) : (
        <div className='checkIcon'>
          <div className='checked flexed-center'>
            <CheckIcon />
          </div>
        </div>
      )}
    </label>
  </div>
);

export default CheckboxNew;
