import React from "react";

const TableFooter = ({
  searchable,
  paginated,
  paginatedPage,
  handlePageChange,
  lastPage,
}) => {
  return (
    <div className="table-footer">
      {searchable && (
        <div>
          <input type="text" placeholder="search" />
        </div>
      )}
      {paginated && (
        <div>
          <button
            className="btn btn-small theme-color page-change"
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
            className="btn btn-small theme-color page-change"
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
  );
};

export default TableFooter;
