import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BrandV2 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="brand-area padding-top-30 padding-bottom-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand-slider brand-slider-02">
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand1.png"} alt="brand" />
                  </div>
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand2.png"} alt="brand" />
                  </div>
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand3.png"} alt="brand" />
                  </div>
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand4.png"} alt="brand" />
                  </div>
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand5.png"} alt="brand" />
                  </div>
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand6.png"} alt="brand" />
                  </div>
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand3.png" }alt="brand" />
                  </div>
                  <div className="brant-item">
                    <img src={publicUrl+"assets/img/brand/brand4.png"} alt="brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default BrandV2