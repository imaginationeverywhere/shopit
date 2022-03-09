import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getCarriers,
  setSelectedCarrier,
} from '../../../actions/shipmentActions';
import Table from '../Table/index';

const addressFrom = {
  name: 'Shawn Ippotle',
  company: 'Shippo',
  street1: '215 Clayton St.',
  city: 'San Francisco',
  state: 'CA',
  zip: '94117',
  country: 'US',
  phone: '+1 555 341 9393',
  email: 'shippotle@goshippo.com',
};

// const addressTo = {
//   name: 'Mr Hippo',
//   company: '',
//   street1: 'Broadway 1',
//   street2: '',
//   city: 'New York',
//   state: 'NY',
//   zip: '10007',
//   country: 'US',
//   phone: '+1 555 341 9393',
//   email: 'mrhippo@goshippo.com',
//   metadata: 'Hippos dont lie',
// };

const CarrierList = ({ addressTo }) => {

  if (!addressTo) return null;
  const dispatch = useDispatch();

  const {
    cartlist: { cart },
    carriers: { data: carriers, loading = true, showError } = {},
    selectedCarrier = {},
  } = useSelector((store) => store);

  const parcels = useCallback(
    (cart) =>
      cart.reduce((acc, product) => {
        if (product?.parcel) {
          return [...acc, ...product?.parcels];
        }

        return acc;
      }, []),
    [cart],
  );

  useEffect(() => {
    dispatch(getCarriers({ addressFrom, addressTo, parcels: parcels(cart) }));
  }, [cart]);
  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: 'Name',
        field: 'provider',
      },
      {
        label: 'Price ($)',
        field: 'amount_local',
      },
      {
        label: 'Days',
        field: 'estimated_days',
      },
      {
        label: 'Service Type',
        field: 'serviceType',
      },
    ],
    rows: [],
  });

  useEffect(() => {
    if (carriers.length) {
      setDataTable({
        ...dataTable,
        rows: carriers.map((carrier) => {
          if (carrier.servicelevel) {
            carrier.serviceType = carrier.servicelevel.name;
          }
          if (carrier.amount_local) {
            carrier.amountWithCurrency = `${carrier.currency_local} ${carrier.amount_local}`;
          }
          return carrier;
        }),
      });
    }
    if (showError && !carriers.length) {
      toast.error("No shipping available for your location. Please use a different address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })


    }
  }, [carriers]);
  const handleCheckboxClick = (selectedCarrier) => {
    dispatch(setSelectedCarrier(selectedCarrier));
  };

  return (
    <>
      {loading ? (
        <span className="slider-loader"></span>
      ) : (
        !!dataTable.rows.length && (
          <Table
            tableData={dataTable}
            checkbox
            paginated={false}
            handleCheckboxClick={handleCheckboxClick}
            selectedRow={selectedCarrier}
          />
        )
      )}
    </>
  );
};

export default CarrierList;
