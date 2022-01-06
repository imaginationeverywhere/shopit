import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import { Helmet } from 'react-helmet';
import axios from 'axios'


// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import { getCartTotal } from '../../../services';
import { getOrderDetails } from '../../../actions/orderActions';
import LoadingOverlay from '../../features/loading-overlay';
import PaymentForm from './payment-form';
import initStripe from '../../../utils/stripe'
import CarrierList from './Carrierlist';

const stripe = initStripe()
const API_URL = process.env.REACT_APP_API_URL;

function CompleteCheckout(props) {
    const [clientSecret, setClientSecret] = useState("");
    const {
        selectedCarrier = {},
        cartlist: { cart },
    } = useSelector((store) => store);


    const [cartlist, setCartlist] = useState(cart);
    const [total, setTotal] = useState(getCartTotal(cart)); 

    const dispatch = useDispatch()
    const {  order, match, history } = props;

    const orderId = match.params.orderId

    if (!orderId) {
        history.push('/pages/404')
    }

    const [shippingPrice, setShippingPrice] = useState(
        parseFloat(selectedCarrier.amount_local) || 0,
    );

    useEffect(() => {
        setCartlist(cart);
        setTotal(getCartTotal(cart));
    }, [cart]);
    const taxPrice = Number((0.05 * total).toFixed(2));

    useEffect(() => {
        console.log(selectedCarrier)
        if (selectedCarrier.amount_local) {
            setShippingPrice(parseFloat(selectedCarrier.amount_local));
        }
    }, [selectedCarrier]);


    useEffect(() => {

        async function createIntent() {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post(API_URL + 'payment/create-intent', { orderId }, config)
            setClientSecret(data.client_secret)
        }
        createIntent()
        dispatch(getOrderDetails(orderId))


    }, [])

    if (order.loading || !Object.values(order.order).length || !clientSecret) {
        return (
            <div className='reactloading'>
                <LoadingOverlay />
            </div>
        )
    }

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
 
    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Checkout</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Checkout</h1>

            <div className="main">

                <PageHeader title="Checkout" subTitle="Shop" />
                <Breadcrumb title="Checkout" parent1={["Shop", "shop/sidebar/list"]} />

                <div className="page-content">
                    {

                        <div className="checkout">
                            <div className="container">
                                <div className="checkout-discount">
                                </div>

                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="summary">
                                            <h3 className="summary-title">Customer Info</h3>

                                            <table className="table table-summary">

                                                <tbody>
                                                    <tr>
                                                        <td>Fullname:</td>
                                                        <td>{order.order.user.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email:</td>
                                                        <td>{order.order.user.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone:</td>
                                                        <td>{order.order.user.phone}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>State:</td>
                                                        <td>{order.order.shippingInfo.state}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>City:</td>
                                                        <td>{order.order.shippingInfo.city}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address:</td>
                                                        <td>{order.order.shippingInfo.street1} {order.order.shippingInfo.street2}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Zip:</td>
                                                        <td>{order.order.shippingInfo.zip}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <aside className="col-lg-6">
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

                                                    {cartlist.map((item, index) =>
                                                        <tr key={index}>
                                                            <td><Link to="#">{item.name}</Link></td>
                                                            <td>${item.sum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                                        </tr>
                                                    )}
                                                    <tr className="summary-subtotal">
                                                        <td>Subtotal:</td>
                                                        <td>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                                    </tr>
                                                    <tr className="summary-shipping">
                                                        <td>Shipping</td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2">
                                                            { }
                                                            <CarrierList addressTo={{...order.order.shippingInfo, name:order.order.user.name, email: order.order.user.email}  } />
                                                        </td>
                                                    </tr>
                                                    <tr className="summary-shipping">
                                                        <td>Tax:</td>
                                                        <td> ${taxPrice}</td>
                                                    </tr>
                                                    <tr className="summary-shipping">
                                                        <td>Shipping:</td>
                                                        <td> ${shippingPrice}</td>
                                                    </tr>
                                                    <tr className="summary-total">
                                                        <td>Total:</td>
                                                        <td>
                                                            $
                                                            {(total + shippingPrice + taxPrice).toLocaleString(
                                                                undefined,
                                                                {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2,
                                                                },
                                                            )}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {clientSecret &&
                                                <Elements options={options} stripe={stripe}>
                                                    <PaymentForm orderId={orderId} />
                                                </Elements>}
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}

export const mapStateToProps = (state) => ({
    cartlist: state.cartlist.cart,
    total: getCartTotal(state.cartlist.cart),
    order: state.order,
    shipping: state.cartlist.shipping
})

export default connect(mapStateToProps)(CompleteCheckout); 
