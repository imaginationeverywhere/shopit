import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';

// global layout components imports
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/Home';

// Auth or User imports
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile'

// Product imports
import ProductDetails from './components/product/ProductDetails';

import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import store from './store'

import './App.css';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container container-fluid'>
          <Route path='/' component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
