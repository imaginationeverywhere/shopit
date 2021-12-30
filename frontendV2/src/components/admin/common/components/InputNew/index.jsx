import React from 'react';
import './Input.scss';
import Loading from '../Loading';
import { useState } from 'react';
import EyeHandler from './EyeHandler';

const Input = ({
  name,
  labelName,
  classes,
  type,
  SvgIcon,
  validating,
  error,
  attachInitials,
  attachInitialsWidth,
  pattern,
  errorMsg,
  onChange,
  ...rest
}) => {
  const [showText, setShowText] = useState(false);
  const toggleType = () => {
    setShowText((prev) => !prev);
  };
  const [showError, setShowError] = useState(false);
  const checkError = ({ target: { value } }) => {
    const patternCheck = new RegExp(pattern, 'gm');
    !patternCheck || patternCheck.test(value)
      ? showError && setShowError(false)
      : !showError && setShowError(true);
  };
  const handleBlur = (e) => {
    checkError(e);
  };

  const handleChange = (e) => {
    showError && setShowError(false);
    // checkError(e);
    onChange(e);
  };

  return (
    <div className={`input ${error ? 'error-input' : ''} ${classes || ''}`}>
      <label htmlFor={`input-${name}`}>{labelName}</label>
      <div className="input-wrap">
        {attachInitials && (
          <input
            autoComplete="off"
            style={{
              width: attachInitialsWidth || '5em',
              padding: '1em 0.5em',
              borderRight: 'none',
              // color: '#888',
              textAlign: 'center',
              borderRadius: '10px',
            }}
            className="initials-input"
            disabled
            value={attachInitials}
            type="text"
          />
        )}
        <input
          className={showError ? 'borderDanger' : ''}
          style={{
            borderRadius: attachInitials ? '0 2px 2px 0' : '4px',
            fontFamily: 'Avenir_Roman',
            padding: '1.8em',
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          name={name}
          type={showText ? 'text' : type || 'text'}
          pattern={pattern}
          {...rest}
        />
        {(SvgIcon || validating) && (
          <div className="icon">
            {!validating ? <SvgIcon /> : <Loading color="#00315785" />}
          </div>
        )}
        {type === 'password' && (
          <div onClick={toggleType} className="eye">
            <EyeHandler showText={showText} />
          </div>
        )}
      </div>
      {showError && (
        <small>{errorMsg || 'Input does not match the required format'}</small>
      )}
    </div>
  );
};

export default Input;
