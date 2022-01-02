import React from 'react';
import classes from '../../userAdmin/styles/cart.module.scss';
const TableFooter = ({
  searchable,
  paginated,
  paginatedPage,
  handlePageChange,
  lastPage,
}) => {
  return (
    <div>
      {searchable && (
        <div>
          <input type="text" placeholder="search" />
        </div>
      )}
      {paginated && (
        <div>
          <button
            className={classes['footer-button']}
            disabled={paginatedPage <= 1}
            onClick={() =>
              handlePageChange({
                target: { name: 'paginatedPage', value: paginatedPage - 1 },
              })
            }
          >
            Prev
          </button>
          <input
            type="text"
            min={1}
            max={100}
            value={paginatedPage || 1}
            name="paginatedPage"
            onChange={handlePageChange}
            className={classes['pageginated-input']}
          />
          <span>/{lastPage}</span>
          <button
            className={classes['footer-button']}
            disabled={paginatedPage === lastPage}
            onClick={() =>
              handlePageChange({
                target: { name: 'paginatedPage', value: paginatedPage + 1 },
              })
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TableFooter;
