import React from 'react';
import DashboardButton from '../common/components/DashboardButton';

const NewProductNav = ({
  checkAllRequired,
  resetForm,
  submitLoading,
  updateType,
  deleteProduct
}) => {
  return (
    <header className='flexed-row flexed-space-between'>
      <h5>{updateType ? 'Product update' : 'New product'}</h5>
      <div style={{display:'flex'}} className='flexed-row'>
        {!updateType && (
          <DashboardButton
            name='Clear'
            classes='marg-2'
            onClick={() => resetForm()}
            disabled={submitLoading}
          />
        )}
        {updateType && (
          <DashboardButton
            name='Delete Product'
            classes='marg-2'
            onClick={() => deleteProduct()}
            disabled={submitLoading}
            type='button'
            loading={submitLoading}
            loadingColor='#c66'
          />
        )}
        <DashboardButton
          name={updateType ? 'Update Product' : 'Save Product'}
          disabled={
            !checkAllRequired(['sizes']) ||
            submitLoading
          }
          type='submit'
          loading={submitLoading}
          colored
          loadingColor='#fff'
        />
      </div>
    </header>
  );
};

export default NewProductNav;
