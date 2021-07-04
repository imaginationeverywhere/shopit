import React, { Fragment, useEffect, useState } from "react";

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

  console.log("the checkedRow is======", checkedRow);

  return (
    <Fragment>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {checkbox && <th scope="col"></th>}
              {columns.map((column) => (
                <th scope="col">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row) => (
              <tr>
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
                  <td>{row[column.field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(paginated || searchable) && (
        <div className="table-footer">
          {searchable && (
            <div>
              <input type="text" placeholder="search" />
            </div>
          )}
          {paginated && (
            <div>
              <button
                className="btn btn-small btn-outline-info page-change"
                disabled={paginatedPage <= 1}
                onClick={() =>
                  handlePageChange({
                    target: { name: "paginatedPage", value: paginatedPage - 1 },
                  })
                }
              >
                Prev
              </button>
              <input
                type="text"
                value={paginatedPage}
                name="paginatedPage"
                onChange={handlePageChange}
                className="page-input"
              />
              <span>/{lastPage}</span>
              <button
                className="btn btn-small btn-outline-info page-change"
                disabled={paginatedPage === lastPage}
                onClick={() =>
                  handlePageChange({
                    target: { name: "paginatedPage", value: paginatedPage + 1 },
                  })
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Table;
