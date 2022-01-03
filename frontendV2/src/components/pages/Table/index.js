import React, { Fragment, useEffect, useState } from 'react';
import TableFooter from './TableFooter';
import Checkbox from './Checkbox';
import Columns from './Columns';

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
  const [allRows, setAllRows] = useState(rows);
  const [lastPage, setLastPage] = useState(Math.ceil(allRows.length / perPage));
  const [paginatedPage, setPaginatedPage] = useState(page);
  const [paginatedRows, setPaginatedRows] = useState(
    allRows.slice(paginatedPage - 1, paginatedPage - 1 + perPage),
  );
  const [checkedRow, setCheckedRow] = useState(selectedRow);

  useEffect(() => {
    if (allRows.length) {
      setLastPage(Math.ceil(allRows.length / perPage));
      setPaginatedRows(
        allRows.slice(paginatedPage - 1, paginatedPage - 1 + perPage),
      );
    }
  }, [allRows, perPage, paginatedPage]);

  useEffect(() => {
    if (rows.length) {
      setAllRows(rows);
    }
  }, [rows]);

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

  const sortColumn = (columnField, order) => {
    const sortedRows = allRows.sort((r1, r2) => {
      if (order === 'asc') {
        return typeof r1[columnField] === 'string'
          ? r1[columnField].localeCompare(r2[columnField])
          : r1[columnField] - r2[columnField];
      } else {
        return typeof r1[columnField] === 'string'
          ? r2[columnField].localeCompare(r1[columnField])
          : r2[columnField] - r1[columnField];
      }
    });
    setAllRows([...sortedRows]);
  };

  return (
    <Fragment>
      <h3 className="summary-title ">Carriers</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <Columns
                checkbox={checkbox}
                columns={columns}
                sortColumn={sortColumn}
              />
            </tr>
          </thead>
          <tbody className="table-adjustment">
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
