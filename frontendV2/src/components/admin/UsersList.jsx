import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import classes from './styles/product-list.module.scss';

const UsersList = () => {
  const { users } = useSelector((state) => state.users);
  console.log(users);
  return (
    <>
      <Helmet>
        <title>Shopit|Admin Users</title>
      </Helmet>
      <h2>Users</h2>
      <div className={classes['product-table-container']}>
        <table className={classes['product-table']}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Role</th>
              <th>Action</th> */}
            </tr>
          </thead>
          {/* <tbody>
            {users.map(({ id, name, email }) => {
              return (
                <tr key={id}>
                 
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default UsersList;
