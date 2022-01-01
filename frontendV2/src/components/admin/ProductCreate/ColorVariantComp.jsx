import React from 'react';
import CheckIcon from '../common/components/CheckboxNew/CheckIconNew';

const ColorSelect = ({ isSelected, color, onSelect }) => (
  <div
    onClick={() => onSelect(color, isSelected)}
    className={`color-variant ${isSelected ? 'selected-color' : ''}`}
  >
    <div
      style={{
        backgroundColor: color,
      }}
      className="circle"
    >
      {isSelected && (
        <CheckIcon color={color === 'white' ? '#888' : '#ffffffdf'} />
      )}
    </div>
  </div>
);

const ColorVariantComp = ({ variants, handleChange }) => {
  const colorArray = [
    '#b87145',
    '#f0c04a',
    '#333333',
    '#cc3333',
    '#3399cc',
    '#669933',
    '#f2719c',
    '#ebebeb',
    'orange',
    'violet',
    'grey',
    'pink',
    'brown',
  ];
  const onSelect = (color, isSelected) => {
    let selectedVariants = variants;

    if (isSelected) {
      // remove from list
      selectedVariants = variants.filter(name => color !== name);
    } else {
      const oldVariants = variants || [];
      selectedVariants = [...oldVariants, color];
    }
    handleChange({
      target: {
        name: 'variants',
        value: selectedVariants,
      },
    });
  };
  return (
    <div className="mt-1">
      <h6>Variants</h6>
      <div className="color-variant-list">
        {colorArray.map((ele, i) => (
          <ColorSelect
            key={ele + i}
            color={ele}
            onSelect={onSelect}
            isSelected={variants && variants.includes(ele)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorVariantComp;
