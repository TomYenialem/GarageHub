import React from 'react'
import { Table, Button } from "react-bootstrap";

function MoreCustomers() {
  return (
    <div className="row">
      <div className="col-lg-12 mt-4 p-3 border rounded text-white">
        <div className="text-center">
          <Button className="mx-2 border py-1 px-3 bg-secondary text-white">
            First
          </Button>
          <Button
            className="mx-2 border py-1 px-3  text-white"
            style={{ backgroundColor: "#222B48" }}
          >
            Previous
          </Button>
          <Button
            className="mx-2 border py-1 px-3  text-white"
            style={{ backgroundColor: "#222B48" }}
          >
            Next
          </Button>
          <Button className="mx-2 border py-1 px-3 bg-secondary text-white">
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MoreCustomers