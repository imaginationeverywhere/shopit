import React, { useState } from 'react'
import { useSelector } from 'react-redux'



const BillingDetails = ({
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setExtras
}) => {
    

    
    return (
        <div className="col-lg-9">
            <h2 className="checkout-title">Billing Details</h2>
            <div className="row">
                <div className="col-sm-6">
                    <label>First Name *</label>
                    <input type="text" onChange={e => setFirstName(e.target.value)} className="form-control" required />
                </div>

                <div className="col-sm-6">
                    <label>Last Name *</label>
                    <input type="text" onChange={e => setLastName(e.target.value)} className="form-control" required />
                </div>
            </div>

            <label htmlFor="size">Country:</label>
            <div className="select-custom">
                <select name="size" id="size" className="form-control" defaultValue="#">
                    <option disabled="disabled" >Select your country</option>
                    <option value="1">United States of America</option>
                </select>
            </div>


            <label>Street address *</label>
            <input type="text" className="form-control" placeholder="House number and Street name" required />
            <input type="text" className="form-control" placeholder="Appartments, suite, unit etc ..." required />

            <div className="row">
                <div className="col-sm-6">
                    <label>Town / City *</label>
                    <input type="text" className="form-control" required />
                </div>

                <div className="col-sm-6">
                    <label>State</label>
                    <input type="text" className="form-control" required />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <label>Postcode / ZIP *</label>
                    <input type="text" className="form-control" required />
                </div>

                <div className="col-sm-6">
                    <label>Phone *</label>
                    <input type="tel" className="form-control" onChange={e => setPhone(e.target.value)} required />
                </div>
            </div>

            <label>Email address *</label>
            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} required />

            <label>Order notes (optional)</label>
            <textarea onChange={e => setExtras(e.target.value)} className="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
        </div>

    )
}

export default BillingDetails