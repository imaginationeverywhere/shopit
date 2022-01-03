import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { MDBDataTableV5 } from 'mdbreact';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'mdbreact/dist/css/mdb.css';

import Loader from '../layout/Loader';
import { getCarriers, setSelectedCarrier } from '../../actions/shipmentActions';
import Table from '../Common/Table/index';
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
const parcel = {
  length: '5',
  width: '5',
  height: '5',
  distance_unit: 'in',
  weight: '2',
  mass_unit: 'lb',
};
// const TableWithCheckbox = ({ dataTable }) => {
//   const dispatch = useDispatch();

//   const handleCheckboxClick = (e) => {
//     // delete e.checkbox;
//     dispatch(setSelectedCarrier(e));
//   };
//   return (
//     <MDBDataTableV5
//       data={dataTable}
//       hover
//       entriesOptions={[5, 20, 25]}
//       entries={5}
//       pagesAmount={4}
//       checkbox
//       headCheckboxID="id2"
//       bodyCheckboxID="checkboxes2"
//       getValueCheckBox={(e) => {
//         handleCheckboxClick(e);
//       }}
//     />
//   );
// };

const CarrierList = ({ cartItems, shippingInfo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const productIds = cartItems.map((item) => item.product);
    // dispatch(getCarriers({ productIds, shippingInfo }));
    dispatch(getCarriers({ addressFrom, addressTo, parcel }));
  }, []);

  const {
    carriers: { data: carriers, loading = true } = {},
    selectedCarrier = {},
  } = useSelector(({ shipment = {} }) => shipment);

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
  }, [carriers]);

  const handleCheckboxClick = (selectedCarrier) => {
    dispatch(setSelectedCarrier(selectedCarrier));
  };

  return (
    <div id="carrier-list">
      {loading ? (
        <Loader />
      ) : (
        dataTable.rows.length && (
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
