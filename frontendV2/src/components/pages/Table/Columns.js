import React, { Fragment, useEffect, useState } from 'react';

const Columns = ({ checkbox, columns, sortColumn }) => {
  const [columnSorting, setColumnSorting] = useState({});
  const DEFAULT_SORTING = 'asc';
  const DESC_SORTING = 'desc';
  const ASC_SORTING = 'asc';

  const handleClick = column => {
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
      columns.forEach(column => {
        tempColumnSorting[column.field] = DEFAULT_SORTING;
      });
      setColumnSorting(tempColumnSorting);
    }
  }, [columns]);

  return (
    <Fragment>
      {columns.map(column => (
        <th scope="" key={column.label} className="">
          <span
            style={{
              whiteSpace: 'nowrap',
              marginleft: '8px',
              marginRight: '8px',
              fontWeight: '400',
              fontSize: '1.4rem',
              lineHeight: '1.5',
              color: '#999',
            }}
            onClick={() => handleClick(column)}
          >
            {column.label}
          </span>
        </th>
      ))}
    </Fragment>
  );
};

export default Columns;
