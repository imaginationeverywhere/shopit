import React from 'react';
import './ModalWrapComp.scss';

const ModalWrapComp = ({ children, closeModal, classes }) => {
  return (
    <div className={`app-modal modalwrapcomp ${classes || ''}`}>
      <div onClick={() => closeModal()} className='dark-env'></div>
      <div className="child">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapComp;
