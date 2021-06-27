import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTableV5 } from "mdbreact";

import Loader from "../layout/Loader";
import { getCarriers, setSelectedCarrier } from "../../actions/shipmentActions";

const TableWithCheckbox = ({ dataTable }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = (e) => {
    delete e.checkbox;
    dispatch(setSelectedCarrier(e));
  };
  return (
    <MDBDataTableV5
      data={dataTable}
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      checkbox
      headCheckboxID="id2"
      bodyCheckboxID="checkboxes2"
      getValueCheckBox={(e) => {
        handleCheckboxClick(e);
      }}
    />
  );
};

const CarrierList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarriers());
  }, []);

  const { data: carriers, loading = true } = useSelector(
    ({ shipment: { carriers = {} } = {} }) => carriers
  );

  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "Name",
        field: "provider",
      },
      {
        label: "Price",
        field: "amountWithCurrency",
      },
      {
        label: "Days",
        field: "days",
      },
      {
        label: "Service Type",
        field: "serviceType",
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

  return (
    <div className="row d-flex justify-content-between">
      {loading ? (
        <Loader />
      ) : (
        dataTable.rows.length && <TableWithCheckbox dataTable={dataTable} />
      )}
    </div>
  );
};

export default CarrierList;
