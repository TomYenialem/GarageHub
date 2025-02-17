import React from "react";
import { Button } from "react-bootstrap";

function MoreCustomers({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="row">
      <div className="col-12 mt-4 p-3 border rounded text-white">
        {/* Flex container for buttons with responsive behavior */}
        <div className="d-flex flex-md-row justify-content-center align-items-center gap-2">
          <Button
            disabled={currentPage === 1}
            className="border py-1 px-3 bg-secondary text-white"
            onClick={() => setCurrentPage(1)}
          >
            First
          </Button>

          <Button
            disabled={currentPage === 1}
            className="border py-1 px-3 text-white"
            style={{ backgroundColor: "#222B48" }}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>

          {/* Page indicator in the center */}
          <span className="mx-2 text-danger fw-bold text-center">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            disabled={currentPage === totalPages}
            className="border py-1 px-3 text-white"
            style={{ backgroundColor: "#222B48" }}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>

          <Button
            disabled={currentPage === totalPages}
            className="border py-1 px-3 bg-secondary text-white"
            onClick={() => setCurrentPage(totalPages)}
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MoreCustomers;
