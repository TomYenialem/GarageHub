import React, { useState, useEffect } from "react";
// import customerService

import { format } from "date-fns";
import { Table, Button } from "react-bootstrap";
import MoreCustomers from "../../../pages/admin/MoreCustomers";

import { FaRegEdit } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";


function AllCustomersList() {
  const { customers, apiError, apiErrorMessage } = useAuth();
  // A state to serve as a flag to show the error message

  const[search,setSearch]=useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;


  // A state to store the error message

  


  const searchItmes = customers.filter(
    (item) =>
      item.customer_first_name.toLowerCase().includes(search.toLowerCase()) ||
      item.customer_last_name.toLowerCase().includes(search.toLowerCase()) ||
      item.customer_email.toLowerCase().includes(search.toLowerCase()) ||
      item.customer_phone_number.toLowerCase().includes(search.toLowerCase())
  );
  const indexOfLastCustomer = currentPage * customersPerPage;


  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

  const currentCustomers = searchItmes.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  console.log(currentCustomers)
  const totalPages = Math.ceil(searchItmes.length / customersPerPage);
  // add function to show the next items after clicke the butto
  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>{apiErrorMessage}</h2>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="contact-section">
            <div className="auto-container">
              <div className="contact-title">
                <h2>customers</h2>
              </div>
              {/* boostrap table */}
              <div className="table-responsive mb-4">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search by name, email, or phone number"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Table striped bordered hover className="table-responsive">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Added Date</th>
                    <th>Active</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {currentCustomers.length > 0 ? (
                      <>
                        {currentCustomers?.map((customer) => (
                          <tr key={customer.customer_id}>
                            <td>{customer.customer_id}</td>
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
                              {customer.active_customer_status ? (
                                <p className="text-success">Yes</p>
                              ) : (
                                <>
                                  <p className="text-danger">No</p>
                                </>
                              )}
                            </td>

                            <td>
                              <div className="edit-link-icons ">
                                <span className="text-danger">
                                  <Link
                                    to={`/admin/customer_edit/${customer.customer_id}`}
                                  >
                                    <FaRegEdit className="text-danger" />
                                  </Link>
                                </span>
                                <Link
                                  to={`/admin/customer_profile/${customer.customer_id}`}
                                >
                                  <span className="text-primary">
                                    <FaExternalLinkAlt />
                                  </span>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <>
                        <tr>
                          <td colSpan="8" className="text-center">
                            <h1 className="text-center mt-4">
                              No Result Found!
                            </h1>
                          </td>
                        </tr>
                      </>
                    )}
                  </>
                </tbody>
              </Table>
            </div>
            {/* add buttons for privious next gap */}

            <MoreCustomers
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </>
      )}
    </>
  );
}

export default AllCustomersList;
