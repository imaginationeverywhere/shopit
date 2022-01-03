import React, { useState } from 'react';
import HintIcon from '../../../ProductCreate/SVGs/HintIcon';
import CutIcon from './CutIcon';
import './PriceInput.scss';

const PriceInput = ({
  labelName,
  name,
  type,
  required,
  hintMessage,
  ...rest
}) => {
  const [showHint, setShowHint] = useState();
  return (
    <div onMouseLeave={() => setShowHint(false)} className="priceinput">
      <label className="label" htmlFor={`input-${name}`}>
        {labelName}
        {required && <small className="asterik ml-1">*</small>}
        {hintMessage && (
          <div className="hint-wrap">
            <div className="pointer" onMouseOver={() => setShowHint(true)}>
              <HintIcon />
            </div>
            {showHint && (
              <div onMouseOver={() => setShowHint(true)} className="hint-menu">
                <p>{hintMessage}</p>
                <div onClick={() => setShowHint(false)} className="pointer">
                  <CutIcon />
                </div>
              </div>
            )}
          </div>
        )}
      </label>
      <div className="inp-wrap flexed-row">
        <label className="strong-label" htmlFor={`input-${name}`}>
          USD
        </label>
        <input
          autoComplete="off"
          id={`input-${name}`}
          name={name}
          type={type || 'text'}
          {...rest}
          required={required}
        />
      </div>
    </div>
  );
};

export default PriceInput;
