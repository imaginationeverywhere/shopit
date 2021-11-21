import React from 'react';
import classes from '../styles/admin-header.module.scss';

const AdminHeader = () => {
    return (
        <nav className={classes['admin-header']}>
            <button>Log in</button>
        </nav>
    );
};

export default AdminHeader;