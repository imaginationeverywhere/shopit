import React from 'react';
import Eye from './Eye';
import EyeClosed from './EyeClosed';

const EyeHandler = ({ showText }) => {
  return showText ? <EyeClosed /> : <Eye />;
};

export default EyeHandler;
