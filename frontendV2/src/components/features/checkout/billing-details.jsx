import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const BillingDetails = ({
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setExtras,
  setState,
  setCity,
  setStreet1,
  setStreet2,
  setZip,
}) => {
  const states = {
    AK: 'Alaska',
    AL: 'Alabama',
    AR: 'Arkansas',
    AS: 'American Samoa',
    AZ: 'Arizona',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DC: 'District of Columbia',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    GU: 'Guam',
    HI: 'Hawaii',
    IA: 'Iowa',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    MA: 'Massachusetts',
    MD: 'Maryland',
    ME: 'Maine',
    MI: 'Michigan',
    MN: 'Minnesota',
    MO: 'Missouri',
    MS: 'Mississippi',
    MT: 'Montana',
    NC: 'North Carolina',
    ND: ' North Dakota',
    NE: 'Nebraska',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NV: 'Nevada',
    NY: 'New York',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    PR: 'Puerto Rico',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VA: 'Virginia',
    VI: 'Virgin Islands',
    VT: 'Vermont',
    WA: 'Washington',
    WI: 'Wisconsin',
    WV: 'West Virginia',
    WY: 'Wyoming',
  };

  return (
    <div className="col-lg-9">
      <h2 className="checkout-title">Billing Details</h2>
      <div className="row">
        <div className="col-sm-6">
          <label>First Name *</label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="col-sm-6">
          <label>Last Name *</label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
            required
          />
        </div>
      </div>

      <label htmlFor="size">Country *</label>
      <div className="select-custom">
        <select name="size" id="size" className="form-control" defaultValue="#">
          <option disabled="disabled">Select your country</option>
          <option value="1">United States of America</option>
        </select>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label htmlFor="size">State *</label>
          <div className="select-custom">
            <select
              onChange={(e) => setState(e.target.value)}
              name="size"
              id="size"
              className="form-control"
              defaultValue="#"
            >
              <option  defaultValue="sdfasf">
                Select State
              </option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>
                  {states[state]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-sm-6">
          <label>City *</label>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            required
          />
        </div>
      </div>

      <label>Street address *</label>
      <input
        type="text"
        onChange={(e) => setStreet1(e.target.value)}
        className="form-control"
        placeholder="House number and Street name"
        required
      />
      <input
        type="text"
        onChange={(e) => setStreet2(e.target.value)}
        className="form-control"
        placeholder="Appartments, suite, unit etc ..."
        required
      />

      <div className="row">
        <div className="col-sm-6">
          <label>Postcode / ZIP *</label>
          <input
            onChange={(e) => setZip(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>

        <div className="col-sm-6">
          <label>Phone *</label>
          <input
            type="tel"
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <label>Email address *</label>
      <input
        type="email"
        className="form-control"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Order notes (optional)</label>
      <textarea
        onChange={(e) => setExtras(e.target.value)}
        className="form-control"
        cols="30"
        rows="4"
        placeholder="Notes about your order, e.g. special notes for delivery"
      ></textarea>
    </div>
  );
};

export default BillingDetails;
