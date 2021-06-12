import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container container-fluid'>
          <Route path='/' component={Home} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
