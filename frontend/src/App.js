import { Route, BrowserRouter as Router } from 'react-router-dom';

// global layout components imports
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/Home';

// Auth or User imports
import Login from './components/user/Login';

// Product imports
import ProductDetails from './components/product/ProductDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container container-fluid'>
          <Route path='/' component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
