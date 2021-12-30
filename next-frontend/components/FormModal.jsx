import React from 'react';

export const FormModal = ({ onSubmit, children, heading }) => {
  return (
    <form className="form-modal" onSubmit={onSubmit}>
      <p className="form-modal-heading">{heading}</p>
      {children}
    </form>
  );
};
