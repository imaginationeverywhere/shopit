import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Ads = () => {



    render() {


    return <div className="beauty-area padding-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-md-12 stone-go-top">
            <Link to="/collection-full">
              <div className="beauty-content align-items-center d-flex">
                <div className="beauty-left">
                  <h2>BEAUTY awaits within</h2>
                </div>
                <div className="beauty-right">
                  <h2>Hats</h2>
                  <h4>get up to 20% off</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

        }
}

export default Ads