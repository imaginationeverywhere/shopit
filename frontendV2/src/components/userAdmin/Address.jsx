import React, { useState } from 'react';
import Select from '../admin/common/components/Select';
import useForm from '../admin/customHook/useForm';
import { countries } from 'countries-list';
import DashboardInput from '../admin/common/components/DashboardInput';
import { toast } from 'react-toastify';
import classes from './styles/cart.module.scss';
import DashboardButton from '../admin/common/components/DashboardButton';

import { useDispatch, useSelector } from 'react-redux';
import { saveShippingInfo } from '../../actions/cartActions';
import { newShippingInfo } from '../../api';

const Address = ({ type }) => {
  const defaultAddressValues = {
    firstName: 'Mr Hippo',
    lastName: 'Shippo',
    company: '',
    street1: 'Broadway 1',
    street2: '',
    city: 'New York',
    state: 'NY',
    zip: '10007',
    country: 'US',
    phone: '+1 555 341 9393',
    email: 'mrhippo@goshippo.com',
    metadata: 'Hippos dont lie',
  };
  const countriesList = Object.values(countries).map(country => ({
    label: country.name,
    value: country.name,
  }));
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { formValues, handleChange, resetForm, checkAllRequired } = useForm(
    defaultAddressValues,
  );
  const upateShippingInfo = async () => {
    setLoading(true);
    try {
      if (type === 'type') {
        const res = await newShippingInfo(formValues);
        if (res.data) {
          toast.success('ShippingInfo updated successfully');
        }
        dispatch(saveShippingInfo(formValues));
      } else {
        // const res = await newShippingInfo(formValues);
        // if (res.data) {
        //   toast.success('ShippingInfo updated successfully');
        // }
        // dispatch(saveShippingInfo(formValues));
      }
    } catch (error) {
      console.log('error guys', error.message);
      toast.error('Something went wrong');
    }
    setLoading(false);
  };

  return (
    <>
      <div className={classes['product-form']}>
        <header className={classes['shipping-flexed-row']}>
          <h5 className={classes['shipping-heading']}>
            {type === 'shipping' ? 'Shipping' : 'Billing'} Address
          </h5>
          <div style={{ display: 'flex' }} className="flexed-row">
            <DashboardButton
              name="Clear"
              classes="marg-2"
              onClick={() => resetForm()}
              disabled={loading}
            />
            <div className={classes['shipping-space']}></div>

            <DashboardButton
              name="Save Address"
              disabled={!checkAllRequired(['sizes']) || loading}
              type="submit"
              loading={loading}
              onClick={upateShippingInfo}
              colored
              loadingColor="#fff"
            />
          </div>
        </header>
        <div className={classes['street-info']}>
          <DashboardInput
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            labelName="First name"
            required
          />
          <div className={classes['shipping-space']}></div>

          <DashboardInput
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            labelName="Last name"
            required
          />
        </div>
        <DashboardInput
          labelName="Company"
          name="company"
          value={formValues.company}
          onChange={handleChange}
          required
        />
        <div className={classes['street-info']}>
          <DashboardInput
            labelName="Street1"
            name="street1"
            value={formValues.street1}
            onChange={handleChange}
            required
          />
          <div className={classes['shipping-space']}></div>
          <DashboardInput
            labelName="Street2"
            name="street2"
            value={formValues.street2}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['zip-info']}>
          <DashboardInput
            labelName="City"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            required
          />
          <div className={classes['shipping-space']}></div>
          <DashboardInput
            labelName="State"
            name="state"
            value={formValues.state}
            onChange={handleChange}
            required
          />
          <div className={classes['shipping-space']}></div>
          <DashboardInput
            labelName="Zip"
            name="zip"
            value={formValues.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['contact-info']}>
          <DashboardInput
            labelName="Phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
          />
          <div className={classes['shipping-space']}></div>
          <DashboardInput
            labelName="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            type="email"
            required
          />
        </div>
        <DashboardInput
          labelName="Metadata"
          name="metadata"
          value={formValues.metadata}
          onChange={handleChange}
        />
        <Select
          onChange={handleChange}
          label="Country"
          placeholder=" "
          name="country"
          value={formValues.country}
          options={countriesList}
          required
          // disabled={addProductLoading}
        />
      </div>
    </>
  );
};

export default Address;
