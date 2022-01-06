import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import { getCartTotal } from '../../../services';
import BillingDetails from '../../features/checkout/billing-details';
import { createDraftOrder } from '../../../actions/orderActions';

function Checkout(props) {
  const dispatch = useDispatch();

  const { cartlist, total, order } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [extras, setExtras] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [zip, setZip] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const shippingPrice = { free: 0, standard: 10, express: 20 };
  const shippingObj = {
    free: 'Free shipping',
    standard: 'Standard',
    express: 'Express',
  };

  useEffect(() => {
    let item = document.querySelector('#checkout-discount-input');

    var opactiyEffect = function (e) {
      e.currentTarget.parentNode
        .querySelector('label')
        .setAttribute('style', 'opacity: 0');
    };

    var blurEffect = function (e) {
      let $this = e.currentTarget;
      if ($this.length !== 0) {
        $this.parentNode
          .querySelector('label')
          .setAttribute('style', 'opacity: 0');
      } else {
        $this.parentNode
          .querySelector('label')
          .setAttribute('style', 'opacity: 1');
      }
    };

    item.addEventListener('focus', opactiyEffect);

    item.addEventListener('blur', blurEffect);

    return () => {
      item.removeEventListener('focus', opactiyEffect);

      item.removeEventListener('blur', blurEffect);
    };
  }, []);

  const validateFields = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !extras ||
      !state ||
      !city ||
      !street1 ||
      !zip
    ) {
      setError('Kindly complete all required fields');
      return false;
    }
    //check email to be sure it's correct
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      return true;
    }
    setError('Invalid email entered');
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);
    setError('');

    if (!validateFields) {
      setShowError(true);
      return false;
    }

    // create draft order and generate checkout ID.
    const orderObject = {
      orderItems: {
        product: '61c8e78a877763645c790268',
        quantity: 2,
      },
      shippingInfo: {
        street1,
        street2,
        city,
        state,
        zip,
        country: 'US',
        phone,
        email,
      },
      totalPrice: total,
      userDetails: {
        fullname: firstName + ' ' + lastName,
        email,
        phone,
      },
    };

    dispatch(createDraftOrder(orderObject));
  };

  useEffect(() => {
    if (order.order && order.order.orderId) {
      props.history.push(`/shop/checkout/${order.order.orderId}`);
    }
  }, [order.order]);

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
          <div className="checkout">
            <div className="container">
              <div className="checkout-discount">
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="checkout-discount-input"
                  />
                  <label
                    htmlFor="checkout-discount-input"
                    className="text-truncate"
                  >
                    Have a coupon? <span>Click here to enter your code</span>
                  </label>
                </form>
              </div>
              <form action="#" onSubmit={handleSubmit}>
                <div className="row">
                  <BillingDetails
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setEmail={setEmail}
                    setPhone={setPhone}
                    setExtras={setExtras}
                    setState={setState}
                    setCity={setCity}
                    setStreet1={setStreet1}
                    setStreet2={setStreet2}
                    setZip={setZip}
                  />

                  <aside className="col-lg-3">
                    <div className="summary">
                      <h3 className="summary-title">Your Order</h3>

                      <table className="table table-summary">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>

                        <tbody>
                          {cartlist.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <Link to="#">{item.name}</Link>
                              </td>
                              <td>
                                $
                                {item.sum.toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </td>
                            </tr>
                          ))}
                          <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>
                              $
                              {total.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td>.......</td>
                          </tr>
                          <tr className="summary-total">
                            <td>Total:</td>
                            <td>
                              $
                              {(
                                total + shippingPrice[props.shipping]
                              ).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <button
                        type="submit"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                        disabled={order.loading}
                      >
                        <span className=" ">
                          {order.loading ? 'Loading...' : 'Proceed to payment'}
                        </span>
                      </button>
                    </div>
                  </aside>
                </div>
              </form>
            </div>
          </div>
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

export default connect(mapStateToProps)(Checkout);
