import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import orders from "../../services/order.service";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function CustomerOrder() {
  const [singleOrderData, setSingleOrderData] = useState([]);
  const { order_id } = useParams();
  const fetchSingelOrderList = () => {
    try {
      const singleOrder = orders.singleOrder(order_id);
      singleOrder.then((data) => {
        if (data.error) {
          console.log(data.error);
          toast.error(data.error);
          return;
        }
        setSingleOrderData(data?.data[0]);
        // console.log(data>.data[0])
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingelOrderList();
  }, []);
  console.log(singleOrderData);

  return (
    <>
      {singleOrderData === undefined || singleOrderData.length == 0 ? (
        <>
          <div className="container text-center m-5">
            <h1 className="mb-2">Order Not Found</h1>

            <Link to="/customer_info">
              <button className="btn btn-danger">Check It Again</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="customer_order">
            <div className="container sub_order">
              {/* Customer Info & Status */}
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div
                    className="card shadow-sm p-4"
                    style={{ borderBottom: "2px solid red" }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="mb-3">
                          {singleOrderData?.customer_first_name}
                        </h2>
                        <p className="text-muted">
                          We will keep you updated on the progress of your
                          service request. Below, you can find details about
                          your order, including the status of each requested
                          service, customer information, and vehicle details.
                          Check back anytime for real-time updates on your
                          order.
                        </p>
                      </div>
                      <span className="">
                        {singleOrderData?.order_status === 0 ? (
                          <span className="bg-warning round text-white px-2 d-inline-block text-center status-badge">
                            Received
                          </span>
                        ) : singleOrderData?.order_status === 1 ? (
                          <span className="bg-primary round text-white px-2 d-inline-block text-center status-badge">
                            In Progress
                          </span>
                        ) : (
                          singleOrderData?.order_status === 2 && (
                            <span className="bg-success round text-white px-2 d-inline-block text-center status-badge">
                              Completed
                            </span>
                          )
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Section - Now using col-md-10 */}
              <div className="row justify-content-center my-4 ">
                <div className="col-md-10">
                  <div className="row ">
                    <div className="col-md-6  ">
                      <div
                        className="card shadow-sm py-4 px-5 "
                        style={{ borderBottom: "2px solid red" }}
                      >
                        <small>CUSTOMER</small>
                        <h2>{singleOrderData?.customer_first_name}</h2>
                        <p>
                          <strong>Email:</strong>{" "}
                          <span className="text-muted">
                            {singleOrderData?.customer_email}
                          </span>
                        </p>
                        <p>
                          <strong>Customer-phone:</strong>{" "}
                          <span className="text-muted">
                            {singleOrderData?.customer_phone_number}
                          </span>
                        </p>
                        <p>
                          <strong>Active-Employee:</strong>{" "}
                          <span className="text-muted">
                            {singleOrderData?.active_customer_status === 1
                              ? "Yes"
                              : "No"}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="card shadow-sm py-4 px-5 "
                        style={{ borderBottom: "2px solid red" }}
                      >
                        <small>CAR IN SERVICE</small>
                        <h2>
                          {singleOrderData?.vehicle_type}(
                          {singleOrderData?.vehicle_color})
                        </h2>
                        <p>
                          <strong>Vehicle-tag:</strong>{" "}
                          <span className="text-muted">
                            {singleOrderData?.vehicle_tag}
                          </span>
                        </p>
                        <p>
                          <strong>vehicle_year:</strong>{" "}
                          <span className="text-muted">
                            {singleOrderData?.vehicle_year}
                          </span>
                        </p>
                        <p>
                          <strong>vehicle_mileage:</strong>{" "}
                          <span className="text-muted">
                            {singleOrderData?.vehicle_mileage}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request Service Box */}
              <div className="row justify-content-center mb-4">
                <div className="col-md-10">
                  <div
                    className="card shadow-sm p-4 mb-5"
                    style={{ borderBottom: "2px solid red" }}
                  >
                    <div>
                      <small className="text-uppercase text-muted">
                        {singleOrderData?.vehicle_type}
                      </small>
                      <h3 className="fw-bold mt-2">Request Service</h3>
                    </div>
                    <div className="border-top pt-3">
                      <div>
                        {singleOrderData?.order_services?.length > 0 ? (
                          <div className="d-flex flex-column gap-3">
                            {singleOrderData?.order_services.map(
                              (service, index) => (
                                <>
                                  <div
                                    key={index}
                                    className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm"
                                  >
                                    {/* Left Side - Service Name & Description */}
                                    <div>
                                      <h4 className="mb-1">
                                        {service.service_name}
                                      </h4>
                                      <p className="text-muted">
                                        {service.service_description}
                                      </p>
                                    </div>

                                    {/* Right Side - Status Indicator */}
                                    <span className="px-3 py-2 rounded text-white text-center status-badge">
                                      {service.order_status === 0 ? (
                                        <span className="bg-warning text-white px-2 d-inline-block text-center status-badge">
                                          Received
                                        </span>
                                      ) : service.order_status === 1 ? (
                                        <span className="bg-primary text-white px-2 d-inline-block text-center status-badge">
                                          In Progress
                                        </span>
                                      ) : (
                                        service.order_status === 2 && (
                                          <span className="bg-success text-white px-2 d-inline-block text-center status-badge">
                                            Completed
                                          </span>
                                        )
                                      )}
                                    </span>
                                  </div>
                                  {index === 0 &&
                                    service.additional_services !== "" && (
                                      <div
                                        key={index}
                                        className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm"
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* Left Side - Service Name & Description */}
                                        <div className="d-flex flex-column gap-2">
                                          <h4 className="mb-1 text-muted">
                                            Additional Service
                                          </h4>
                                          <p className="mb-0">
                                            {service?.additional_services}
                                          </p>
                                        </div>

                                        {/* Right Side - Status Indicator */}
                                        <span className="px-3 py-2 rounded text-white text-center status-badge">
                                          {service.order_status === 0 ? (
                                            <span className="bg-warning text-white px-2 d-inline-block text-center status-badge">
                                              Received
                                            </span>
                                          ) : service.order_status === 1 ? (
                                            <span className="bg-primary text-white px-2 d-inline-block text-center status-badge">
                                              In Progress
                                            </span>
                                          ) : (
                                            service.order_status === 2 && (
                                              <span className="bg-success ttext-white px-2 d-inline-block text-center status-badge">
                                                Completed
                                              </span>
                                            )
                                          )}
                                        </span>
                                      </div>
                                    )}
                                </>
                              )
                            )}
                          </div>
                        ) : (
                          <p>No services found.</p>
                        )}
                      </div>
                    </div>

                    {/* Additional Order Section */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CustomerOrder;
