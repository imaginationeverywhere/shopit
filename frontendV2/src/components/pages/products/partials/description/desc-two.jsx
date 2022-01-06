import MarkdownPreview from 'components/admin/common/components/MarkdownPreview';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { isIEBrowser } from '../../../../../utils';

function DescTwo(props) {
  const { product } = props;

  return (
    <Tabs selectedTabClassName="show" selectedTabPanelClassName="active">
      <div className="product-details-tab product-details-extended">
        <TabList className="nav nav-pills justify-content-center">
          <Tab className="nav-item">
            <span className="nav-link"> Description</span>
          </Tab>

          <Tab className="nav-item">
            <span className="nav-link"> Additional information</span>
          </Tab>

          <Tab className="nav-item">
            <span className="nav-link">Shipping & Returns</span>
          </Tab>

          <Tab className="nav-item">
            <span className="nav-link">Reviews ({product.reviews})</span>
          </Tab>
        </TabList>

        <div className="tab-content">
        <TabPanel className="tab-pane">
            <MarkdownPreview text={product?.shortDesc} />
          </TabPanel>

          <TabPanel className="tab-pane">
            <MarkdownPreview text={product?.shortDesc} />
          </TabPanel>

          <TabPanel className="tab-pane">
            <div className="product-desc-content">
              <div className="container">
                <h3>Delivery & returns</h3>
                <p>
                  We deliver to over 100 countries around the world. For full
                  details of the delivery options we offer, please view our{' '}
                  <Link to="#">Delivery information</Link>
                  <br />
                  We hope you’ll love every purchase, but if you ever need to
                  return an item you can do so within a month of receipt. For
                  full details of how to make a return, please view our{' '}
                  <Link to="#">Returns information</Link>
                </p>
              </div>
            </div>
          </TabPanel>

          <TabPanel className="tab-pane">
            <div className="container">
              <div className="reviews">
                <h3>Reviews (2)</h3>
                <div className="review">
                  <div
                    className="row no-gutters"
                    style={isIEBrowser() ? { flexDirection: 'row' } : {}}
                  >
                    <div className="col-auto">
                      <h4>
                        <Link to="#">Samanta J.</Link>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: '80%' }}
                          ></div>
                        </div>
                      </div>
                      <span className="review-date">6 days ago</span>
                    </div>
                    <div className="col">
                      <h4>Good, perfect size</h4>

                      <div className="review-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus cum dolores assumenda asperiores facilis
                          porro reprehenderit animi culpa atque blanditiis
                          commodi perspiciatis doloremque, possimus, explicabo,
                          autem fugit beatae quae voluptas!
                        </p>
                      </div>

                      <div className="review-action">
                        <Link to="#">
                          <i className="icon-thumbs-up"></i>Helpful (2)
                        </Link>
                        <Link to="#">
                          <i className="icon-thumbs-down"></i>Unhelpful (0)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="review">
                  <div
                    className="row no-gutters"
                    style={isIEBrowser() ? { flexDirection: 'row' } : {}}
                  >
                    <div className="col-auto">
                      <h4>
                        <Link to="#">John Doe</Link>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: '100%' }}
                          ></div>
                        </div>
                      </div>
                      <span className="review-date">5 days ago</span>
                    </div>
                    <div className="col">
                      <h4>Very good</h4>

                      <div className="review-content">
                        <p>
                          Sed, molestias, tempore? Ex dolor esse iure hic veniam
                          laborum blanditiis laudantium iste amet. Cum non
                          voluptate eos enim, ab cumque nam, modi, quas iure
                          illum repellendus, blanditiis perspiciatis beatae!
                        </p>
                      </div>

                      <div className="review-action">
                        <Link to="#">
                          <i className="icon-thumbs-up"></i>Helpful (0)
                        </Link>
                        <Link to="#">
                          <i className="icon-thumbs-down"></i>Unhelpful (0)
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
}

function mapStateToProps(state, props) {
  return {
    product: state.data.singleProduct,
  };
}

export default connect(mapStateToProps)(DescTwo);
