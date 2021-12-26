import React, { Fragment, useEffect, useState } from "react";

const Columns = ({ checkbox, columns, sortColumn }) => {
  const [columnSorting, setColumnSorting] = useState({});
  const DEFAULT_SORTING = "asc";
  const DESC_SORTING = "desc";
  const ASC_SORTING = "asc";

  const handleClick = (column) => {
    columnSorting[column.field] === ASC_SORTING
      ? setColumnSorting({ ...columnSorting, [column.field]: DESC_SORTING })
      : setColumnSorting({
          ...columnSorting,
          [column.field]: ASC_SORTING,
        });
    sortColumn(column.field, columnSorting[column.field]);
  };

  useEffect(() => {
    if (columns.length) {
      const tempColumnSorting = {};
      columns.forEach((column) => {
        tempColumnSorting[column.field] = DEFAULT_SORTING;
      });
      setColumnSorting(tempColumnSorting);
    }
  }, [columns]);

  return (
    <Fragment>
      {checkbox && <th scope="col"></th>}
      {columns.map((column) => (
        <th scope="col" key={column.label} className="table-col">
          <span onClick={() => handleClick(column)}>{column.label}</span>
          {columnSorting[column.field] === DEFAULT_SORTING ? (
            <i className="fas fa-arrow-up"></i>
          ) : (
            <i className="fas fa-arrow-down"></i>
          )}
        </th>
      ))}
    </Fragment>
  );
};

export default Columns;
