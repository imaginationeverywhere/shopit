import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import classes from './styles/product-list.module.scss';
import DashboardButton from './common/components/DashboardButton';
import { withRouter } from 'react-router-dom';

const ProductList = ({ history }) => {
  const { adminProducts: products } = useSelector(state => state.data);
  return (
    <div className="p-8">
      <Helmet>
        <title>Shopit|Admin Templates</title>
      </Helmet>
      <div className={classes['product-header']}>
        <h2>Products</h2>
        <DashboardButton
          colored
          name="Add product"
          onClick={() => history && history.push('/admin/products/create')}
        />
      </div>

      <div className={classes['product-table-container']}>
        <table className={classes['product-table']}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Stock</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(({ id, name, price, stock }) => {
                return (
                  <tr
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      history && history.push('/admin/products/edit/' + id)
                    }
                    key={id}
                  >
                    <td>{id}</td>
                    <td className={classes['product-name']}>{name}</td>
                    <td>{price}</td>
                    <td>{stock}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withRouter(ProductList);
