import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { matchPath } from 'react-router-dom';
import store from '../store';

//import MobileMenu from './admin/common/mobile-menu';
import Sidebar from './admin/Sidebar';

// import Utils
import {
  mobileMenu,
  preventProductDefault,
  removePreventProductDefault,
  stickyHeaderHandler,
} from '../utils';

// import Actions
import { closeQuickViewModal, getAdminProducts } from '../actions';

// import data
import { innerOverlayPaths } from '../mock_data/data';

import classes from '../components/admin/styles/style.module.scss';

function App(props) {
  let matchedCount = 0;
  let overlayFlag = true;
  const [container, setContainer] = useState('container');
  const [prevPath, setPrevPath] = useState('');

  useLayoutEffect(() => {
    overlayFlag = true;
    // set overlay
    for (let i = 0; i < innerOverlayPaths.length; i++) {
      if (
        prevPath.indexOf(innerOverlayPaths[i]) > 0 &&
        props.location.pathname.indexOf(innerOverlayPaths[i]) > 0
      ) {
        overlayFlag = false;
      }

      if (prevPath === props.location.pathname) {
        overlayFlag = false;
      }
    }

    if (overlayFlag) {
      document.querySelector('body').classList.remove('loaded');
      document.querySelector('#root').classList.remove('loaded');
    }
  });

  useEffect(() => {
    //mobileMenu();

    // set sticky header
    stickyHeaderHandler();
    window.addEventListener('scroll', stickyHeaderHandler, true);

    // prevent product thumb icons
    preventProductDefault();

    return () => {
      window.removeEventListener('scroll', stickyHeaderHandler);

      // remove listeners of prevent product
      removePreventProductDefault();
    };
  }, []);

  useEffect(() => {
    // set prevPathname
    setPrevPath(props.location.pathname);

    // remove overlay
    setTimeout(() => {
      document.querySelector('body').classList.add('loaded');
      document.querySelector('#root').classList.add('loaded');
    }, 200);

    // show 404 page
    while (
      matchedCount < props.children.length &&
      !matchPath(window.location.pathname, {
        path: props.children[matchedCount].props.path,
        exact: true,
      })
    ) {
      matchedCount++;
    }

    if (
      props.children &&
      !props.children.length &&
      matchPath(window.location.pathname, {
        path: props.children.props.path,
        exact: true,
      })
    ) {
      matchedCount = 1;
    }

    if (
      matchedCount >= props.children.length ||
      (props.children && !props.children.length && matchedCount === 0)
    ) {
      window.location = process.env.PUBLIC_URL + '/pages/404';
    }

    // close exiting quickview modal
    if (store.getState() && store.getState().data.quickView) {
      store.dispatch(closeQuickViewModal());
    }

    // set the container type according to page grid type
    if (props.location.pathname.indexOf('fullwidth') !== -1) {
      setContainer('container-fluid');
    } else {
      setContainer('container');
    }
  });

  store.dispatch(getAdminProducts());

  return (
    <>
      <div className="page-wrapper">
        <div className={classes['admin-page-wrapper']}>
          <Sidebar />
          <main>{props.children}</main>
        </div>
        {/* <div className="admin-footer">
          <h3>All Rights Reserved</h3>
        </div> */}
        <ToastContainer autoClose={3000} className="toast-container" />
      </div>

      {/* <MobileMenu /> */}
    </>
  );
}

export default App;
