import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import { getCartTotal } from '../../../services';
import { getOrderDetails } from '../../../actions/orderActions';
import LoadingOverlay from '../../features/loading-overlay';

function CompleteCheckout(props) {

    const dispatch = useDispatch()
    const { cartlist, total, order, match, history } = props;
 
    const orderId = match.params.orderId

    if (!orderId) {
        history.push('/pages/404')
    }

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [])

    const shippingPrice = { "free": 0, "standard": 10, "express": 20 };
    const shippingObj = { "free": "Free shipping", "standard": "Standard", "express": "Express" };


    if (order.loading|| !Object.values(order.order).length){
        return (
            <div className='reactloading'> 
            <LoadingOverlay />
        </div>
        )
    }


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
                                                            <td>{order.order.shippingInfo.street1}</td>
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
                                                        <tr>
                                                            <td>Shipping:</td>
                                                            <td>{shippingObj[props.shipping]}</td>
                                                        </tr>
                                                        <tr className="summary-total">
                                                            <td>Total:</td>
                                                            <td>${(total + shippingPrice[props.shipping]).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block" disabled={order.loading}>
                                                    <span className=" ">
                                                        {order.loading ? "Loading..." : "Proceed to payment"}
                                                    </span>
                                                </button>
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