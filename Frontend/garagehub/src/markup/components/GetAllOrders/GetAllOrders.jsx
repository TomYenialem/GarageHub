import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Table } from "react-bootstrap";
import orders from "../../../services/order.service";
import { FaRegEdit, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function GetAllOrders() {
  const [apiError, setApiError] = useState(false);
  const [ordersData, setOrdersData] = useState([]);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await orders.getAllOrders();
        if (!res.ok) {
          setApiError(true);
          if (res.status === 401) {
            setApiErrorMessage("Please login again");
          } else if (res.status === 403) {
            setApiErrorMessage("You are not authorized to view this page");
          } else {
            setApiErrorMessage("Please try again later");
          }
          return;
        }

        const data = await res.json();
        if (data.data.length !== 0) {
          setOrdersData(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []); // Dependency array set to [] to run once on component mount

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
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>Orders</h2>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Vehicle</th>
                  <th>Order Date</th>
                  <th>Received By</th>
                  <th>Order Status</th>
                  <th>Edit/View</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.length > 0 ? (
                  ordersData.map((order, index) => (
                    <tr key={index}>
                      <td>{order.order_id}</td>

                      {/* Customer Info in One Cell */}
                      <td>
                        <strong>
                          {order.customer_first_name} {order.customer_last_name}
                        </strong>
                        <br />
                        📧 {order.customer_email}
                        <br />
                        📞 {order.customer_phone_number}
                      </td>

                      {/* Vehicle Info in One Cell */}
                      <td>
                        {order.vehicle_type} <br />({order.vehicle_year}
                        <br />
                        {order.vehicle_mileage})
                      </td>

                      <td>
                        {format(
                          new Date(order.order_date),
                          "MM-dd-yyyy | HH:mm"
                        )}
                      </td>

                      <td>
                        {order.employee_first_name} {order.employee_last_name}
                      </td>

                      <td>
                        {order.order_status === 0 ? (
                          <span className="bg-warning rounded text-white px-3">
                            Received
                          </span>
                        ) : order.order_status === 1 ? (
                          <span className="bg-primary rounded text-white px-3">
                            In Progress
                          </span>
                        ) : (
                          order.order_status ===
                          2 && (
                            <span className="bg-success rounded text-white px-3">
                              Completed
                            </span>
                          )
                        )}
                      </td>

                      <td>
                        <div className="edit-link-icons">
                          <span className="text-danger">
                            <Link
                              to={`/admin/edit_orders/${order.order_id}`}
                            >
                              <FaRegEdit />
                            </Link>
                          </span>
                          <Link to={`/admin/order_details/${order.order_id}`}>
                            <span className="text-primary">
                              <FaExternalLinkAlt />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      <h4 className="text-center mt-4">No Orders Found!</h4>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
}

export default GetAllOrders;
