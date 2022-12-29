import React from 'react';
import "./Pagination.scss";

const Pagination = ({ currentPage, paginate, pageNumbers, spots, spotsPerPage }) => {
    return (
        <div className="pagination">
            {/* pagination with prev and next buttons */}
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="prev"
            >
                Prev
            </button>

            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={number === currentPage ? "button active" : "button"}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={spots ? currentPage === Math.ceil(spots.length / spotsPerPage) : true}
                className="next"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination