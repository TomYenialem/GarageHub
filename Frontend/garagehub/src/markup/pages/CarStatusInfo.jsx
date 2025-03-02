import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import orders from "../../services/order.service"; 
function CarStatusInfo() {
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState("");
  const [orderList, setOrderList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await orders.getAllOrders();
        if (!res.ok) {
          console.error("Error fetching orders");
          return;
        }
        const data = await res.json();
        setOrderList(data.data || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
    const orderExists = orderList.some(
      (order) => Number(order.order_id) === Number(customerInfo)
    );

  const handleCheckOrder = () => {
    if (!customerInfo) {
      setErrorMessage("Please enter an order ID.");
      return;
    }

  
    console.log(orderExists)

    if (orderExists) {
      setErrorMessage(""); // Clear error
    } else {
      setErrorMessage("Wrong order ID. Please try again.");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div
        className="card p-5 shadow-lg border-0 rounded order_card"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h3 className="text-center mb-4">
          Welcome! 🚗 <br />
          Access your car status by entering your secret order ID.
        </h3>

        <div className="form-group mb-3 mt-4">
          <input
            type="text"
            name="customer_info"
            value={customerInfo}
            onChange={(event) => setCustomerInfo(event.target.value)}
            className="form-control p-2"
            placeholder="Insert your secret order ID here"
            required
          />
        </div>

        {errorMessage && (
          <p className="text-danger text-center">{errorMessage}</p>
        )}

        <div className="form-group text-center mt-1">
          {orderExists ? (
            <Link to={`/customer_order/${customerInfo}`}>
              <button className="theme-btn btn-style-one w-100 py-2">
                Check
              </button>
            </Link>
          ) : (
            <button
              className="theme-btn btn-style-one w-100"
              type="submit"
              disabled={loading}
              onClick={handleCheckOrder}
            >
              <span>
                {loading ? (
                  <div>
                    <span>Please wait </span>
                    <PulseLoader size={10} color={"#123abc"} />
                  </div>
                ) : (
                  "Check Status"
                )}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarStatusInfo
