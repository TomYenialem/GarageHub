import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import { format } from "date-fns";
import { Table } from "react-bootstrap";
import { FaHandPointer } from "react-icons/fa";
import SingleCustomer from "../SingleCustomer/SingleCustomer";
import GetSingleVehicle from "../GetSinngelVehicle/GetSingleVehicle";

function Orders() {
  const [search, setSearch] = useState("");
  const { customers } = useAuth();
  const [showCustomers, setShowCustomers] = useState(true);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  // Handle search input
  const searchValue = (e) => {
    let val = e.target.value;
    setSearch(val);
    setShowCustomers(val.length === 0);
  };

  // Filter customers based on search input
  const searchItems = customers.filter(
    (item) =>
      item.customer_first_name.toLowerCase().includes(search.toLowerCase()) ||
      item.customer_last_name.toLowerCase().includes(search.toLowerCase()) ||
      item.customer_email.toLowerCase().includes(search.toLowerCase()) ||
      item.customer_phone_number.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="contact-section">
      <div className="auto-container ">
        <div className="contact-title mb-1">
          <h2>Create a new order</h2>
        </div>

        {/* If customer is selected, show SingleCustomer component */}
        {selectedCustomerId ? (
          <div>
            <SingleCustomer
              customer_id={selectedCustomerId}
              onBack={() => setSelectedCustomerId(null)}
            />
            <div className="mt-4 p-4 bg-white shadow rounded">
              <h4 className="fw-bold mb-3">Choose A Vehicle</h4>
              <GetSingleVehicle customer_id={selectedCustomerId} />
            </div>
            <></>
          </div>
        ) : (
          <>
            <div className="table-responsive mb-4">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search by name, email, or phone number"
                aria-label="Search"
                value={search}
                onChange={searchValue}
              />
            </div>

            {showCustomers ? (
              <div className="form-group col-md-10">
                <button className="theme-btn btn-style-one">
                  <Link to={"/admin/add_customers"}>
                    <span>Add customer</span>
                  </Link>
                </button>
              </div>
            ) : (
              <Table striped bordered hover className="table-responsive-mobile">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Added Date</th>
                    <th>Choose</th>
                  </tr>
                </thead>
                <tbody>
                  {searchItems.length > 0 ? (
                    searchItems.map((customer) => (
                      <tr key={customer.customer_id}>
                        <td>{customer.customer_first_name}</td>
                        <td>{customer.customer_last_name}</td>
                        <td>{customer.customer_email}</td>
                        <td>{customer.customer_phone_number}</td>
                        <td>
                          {format(
                            new Date(customer.customer_added_date),
                            "MM - dd - yyyy | kk:mm"
                          )}
                        </td>
                        <td>
                          <div
                            className="edit-delete-icons"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setSelectedCustomerId(customer.customer_id)
                            }
                          >
                            <FaHandPointer />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        <h1 className="text-center mt-4">No Result Found!</h1>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Orders;
