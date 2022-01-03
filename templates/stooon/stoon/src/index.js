import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import HomeV5 from './components/home-v5';
import About from './components/about';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import SingleProducts from './components/product-details';
import ShoppingCart from './components/shoping-cart';
import Faq from './components/faq';
import Error from './components/error';
import CommingSoon from './components/comming-soon';
import Collection from './components/collection';
import CollectionList from './components/collection-list';
import CollectionFull from './components/collection-full';
import Contact from './components/contact';

class Root extends Component {
  render() {
    return (
      <Router>
        <HashRouter basename="/">
          <div>
            <Switch>
              <Route exact path="/" component={HomeV1} />
              <Route path="/home-v2" component={HomeV2} />
              <Route path="/home-v3" component={HomeV3} />
              <Route path="/home-v4" component={HomeV4} />
              <Route path="/home-v5" component={HomeV5} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog-details" component={BlogDetails} />
              <Route path="/product-details" component={SingleProducts} />
              <Route path="/shoping-cart" component={ShoppingCart} />
              <Route path="/faq" component={Faq} />
              <Route path="/error" component={Error} />
              <Route path="/comming-soon" component={CommingSoon} />
              <Route path="/collection" component={Collection} />
              <Route path="/collection-list" component={CollectionList} />
              <Route path="/collection-full" component={CollectionFull} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </HashRouter>
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('stoon'));
