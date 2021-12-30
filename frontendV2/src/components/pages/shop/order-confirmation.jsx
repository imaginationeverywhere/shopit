import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useStripe } from '@stripe/react-stripe-js';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { refreshStore } from '../../../actions';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import { getCartTotal } from '../../../services';
import { getOrderDetails } from '../../../actions/orderActions';
import LoadingOverlay from '../../features/loading-overlay';

import initStripe from '../../../utils/stripe';

const stripe = initStripe();
const API_URL = process.env.REACT_APP_API_URL;

function OrderConfirmation(props) {
  const clientSecret = new URLSearchParams(window.location.search).get(
    'payment_intent_client_secret',
  );
  const { match, history } = props;
  const dispatch = useDispatch();

  const orderId = match.params.orderId;
  const stripe = useStripe();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // const clientSecret = props.clientSecret
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (paymentIntent.status === 'succeeded') {
        //finalize payment
        console.log(paymentIntent);
        (async () => {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const orderDetails = await axios.post(
            API_URL + 'order/finalize',
            { orderId, paymentIntentId: paymentIntent.id },
            config,
          );
          setOrderDetails(orderDetails);
          setIsLoading(false);
          dispatch(refreshStore());
        })();
      } else {
        //show payment error
      }
    });
  }, [stripe]);

  if (!clientSecret || isLoading || !orderDetails) {
    return (
      <div className="reactloading">
        <LoadingOverlay />
      </div>
    );
  }

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  console.log(options);

  return (
    <>
      <Helmet>
        <title>Molla React eCommerce Template | Checkout</title>
      </Helmet>

      <h1 className="d-none">Molla React eCommerce Template - Checkout</h1>

      <div className="main">
        <PageHeader title="Checkout" subTitle="Shop" />
        <Breadcrumb title="Checkout" parent1={['Shop', 'shop/sidebar/list']} />

        <div className="page-content">
          {
            <div className="checkout">
              <div className="container">
                <div className="checkout-discount"></div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="summary">
                      <h3 className="summary-title">
                        Order Successfully Created
                      </h3>

                      <table className="table table-summary">
                        <thead>
                          <tr>
                            <th>Shopit</th>
                            <th>....</th>
                          </tr>
                        </thead>

                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export const mapStateToProps = (state) => ({
  cartlist: state.cartlist.cart,
  total: getCartTotal(state.cartlist.cart),
  order: state.order,
  shipping: state.cartlist.shipping,
});

export default connect(mapStateToProps)(OrderConfirmation);
