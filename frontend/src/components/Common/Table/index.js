import React, { Fragment, useEffect, useState } from "react";
import TableFooter from "./TableFooter";

const Checkbox = ({ value, handleCheckboxChange, row }) => {
  const { servicelevel: { token: valueToken } = {} } = value;
  const { servicelevel: { token: rowToken } = {} } = row;
  return (
    <input
      type="checkbox"
      checked={valueToken && valueToken === rowToken}
      onChange={() => handleCheckboxChange(row)}
    />
  );
};

const Table = ({
  tableData,
  checkbox,
  paginated,
  page = 1,
  perPage = 5,
  searchable,
  handleCheckboxClick,
  selectedRow = {},
}) => {
  const { columns = [], rows = [] } = tableData;
  const [lastPage, setLastPage] = useState(Math.ceil(rows.length / perPage));
  const [paginatedPage, setPaginatedPage] = useState(page);
  const [paginatedRows, setPaginatedRows] = useState(
    rows.slice(paginatedPage - 1, paginatedPage - 1 + perPage)
  );
  const [checkedRow, setCheckedRow] = useState(selectedRow);

  useEffect(() => {
    if (rows.length) {
      setLastPage(Math.ceil(rows.length / perPage));
      setPaginatedRows(
        rows.slice(paginatedPage - 1, paginatedPage - 1 + perPage)
      );
    }
  }, [rows, perPage, paginatedPage]);

  useEffect(() => {
    setPaginatedPage(page);
  }, [page]);

  useEffect(() => {
    if (Object.keys(selectedRow).length) {
      setCheckedRow(selectedRow);
    }
  }, [selectedRow]);

  const handlePageChange = ({ target: { name, value } }) => {
    setPaginatedPage(parseInt(value));
  };

  const handleCheckboxChange = (row) => {
    setCheckedRow(row);
    handleCheckboxClick(row);
  };

  return (
    <Fragment>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {checkbox && <th scope="col"></th>}
              {columns.map((column) => (
                <th scope="col" key={column.label}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row, index) => (
              <tr key={index}>
                {checkbox && (
                  <td>
                    <Checkbox
                      value={checkedRow}
                      handleCheckboxChange={handleCheckboxChange}
                      row={row}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.field}>{row[column.field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(paginated || searchable) && (
        <TableFooter
          paginatedPage={paginatedPage}
          handlePageChange={handlePageChange}
          lastPage={lastPage}
          searchable={searchable}
          paginated={paginated}
        />
      )}
    </Fragment>
  );
};

export default Table;