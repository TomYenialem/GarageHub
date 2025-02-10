import React, { useState } from "react";
import orders from "../../../../services/order.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AdditionalServices({
  employee_id,
  customer_id,
  vehicle_id,
  selectedServices,

}) 

{
  const [order_description, setServiceDescription] = useState("");
  const [order_total_price, setPrice] = useState("");
  const [active_order, setActive_order] = useState(1);
  const [order_status, setOrderStatus] = useState(0);
  const [serviceCompleted, setServiceCompleted] = useState(0);
  const [serverError, setServerError] = useState("");
     const navigate = useNavigate();

  const submitOrders = async (e) => {
    e.preventDefault();
 
    try {
      // Prepare the order data
      const datas = {
        employee_id,
        customer_id,
        vehicle_id,
        order_description,
        order_total_price: parseFloat(order_total_price), // Ensure it's a number
        active_order,
        order_status,
        order_services: selectedServices.map((serviceId) => ({
          service_id: serviceId,
          service_completed: serviceCompleted, // Default to 0 (not completed)
        })),
      };

      console.log("Submitting order data:", datas); // Debugging: Log the payload

      // Send the order data to the server
      const order = await orders.sendOrderInfo(datas);

      if (order.error) {
        setServerError(order.error);
        console.log(order.error);
      } else {
        toast.success(order.message);
        setServerError("");
        setServiceDescription("");
        setPrice("");
        navigate("/admin/all_orders");
      }
    } catch (error) {
      console.log(error);
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setServerError(resMessage);
    }
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="col-md-10">
          <div className="contact-title">
            <h4>Services We Provide</h4>
          </div>
        </div>

        {/* Add or Edit Service Form */}
        <div className="service-box col-md-10 mt-5">
          <div className="contact-title">
            <h2>Additional Request</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-10">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={submitOrders}>
                    {serverError && (
                      <div
                        className="validation-error text-danger"
                        role="alert"
                      >
                        {serverError}
                      </div>
                    )}
                    <div className="row clearfix">
                      <div className="form-group col-md-10">
                        <textarea
                          type="text"
                          name="service_description"
                          value={order_description}
                          onChange={(e) =>
                            setServiceDescription(e.target.value)
                          }
                          placeholder="Service Description"
                          className="form-control"
                          rows="3"
                        />
                      </div>
                      <div className="form-group col-md-10">
                        <input
                          type="number"
                          required
                          name="order_total_price"
                          value={order_total_price}
                          onChange={(e) => setPrice(e.target.value)}
                          placeholder="Price"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <button
                          className="theme-btn btn-style-one disabled-btn"
                          type="submit"
                          disabled={
                            selectedServices.length === 0 ||
                            order_total_price === ""
                          }
                        >
                          Submit Order
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalServices;
