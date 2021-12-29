import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'mdbreact/dist/css/mdb.css';

import Loader from '../../Loader';
import {
  getCarriers,
  setSelectedCarrier,
} from '../../../actions/shipmentActions';
import Table from '../Table/index';

const addressFrom = {
  name: 'Shawn Ippotle',
  street1: '777 Brockton Avenue',
  city: 'Abington',
  state: 'MA',
  zip: '2351',
  country: 'US',
};
const addressTo = {
  name: 'Mr Hippo',
  street1: '4133 Veterans Memorial Drive',
  city: 'Batavia',
  state: 'NY',
  zip: '14020',
  country: 'US',
};

const CarrierList = () => {
  const dispatch = useDispatch();
  const {
    cartlist: { cart, shippingInfo },
    carriers: { data: carriers, loading = true } = {},
    selectedCarrier = {},
  } = useSelector(store => store);

  const parcels = useCallback(
    cart =>
      cart.reduce((acc, product) => {
        if (product?.parcel) {
          return [...acc, product?.parcel];
        }

        return acc;
      }, []),
    [cart],
  );

  useEffect(() => {
    dispatch(getCarriers({ addressFrom, addressTo, parcels: parcels(cart) }));
  }, []);
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
        label: 'Estimated Days',
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
        rows: carriers.map(carrier => {
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
  }, [carriers]);
  const handleCheckboxClick = selectedCarrier => {
    dispatch(setSelectedCarrier(selectedCarrier));
  };

  return (
    <div id="carrier-list">
      {loading ? (
        <Loader />
      ) : (
        !!dataTable.rows.length && (
          <Table
            tableData={dataTable}
            checkbox
            paginated
            perPage={10}
            handleCheckboxClick={handleCheckboxClick}
            selectedRow={selectedCarrier}
          />
        )
      )}
    </div>
  );
};

export default CarrierList;
