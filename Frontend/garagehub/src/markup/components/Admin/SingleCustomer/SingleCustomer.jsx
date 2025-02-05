
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import singleCustomers from "../../../../services/customers.service"; 
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "../../../../Context/authContext";
function SingleCustomer({ customer_id, onBack ,showBackButton=true}) {
  const {singleCustomer, setSingleCustomer} = useAuth()

  useEffect(() => {
    const fetchSingleCustomer = async () => {
      try {
        const response = await singleCustomers.singleCustomer(customer_id);
        const data = await response.json();
        setSingleCustomer(data.data); // Assuming data.data is an array
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchSingleCustomer();
  }, [customer_id]);

  if (!singleCustomer || singleCustomer.length === 0) {
    return <p>Loading customer details...</p>;
  }

  return (
    <div className="customer-details container ">
      <div className="arrow">
        {showBackButton && (
          <button onClick={onBack} className="btn btn-danger mb-3 arrow">
            <FaArrowLeft />
          </button>
        )}
      </div>

      {singleCustomer.map((customer) => (
        <div
          key={customer.customer_id}
          className={`${showBackButton &&'card p-4 shadow'}`}
        >
          <div className="mb-3">
            <h2 className="fw-bold mb-3">
              {customer.customer_first_name} {customer.customer_last_name}
            </h2>
            <p>
              <strong>Email:</strong> {customer.customer_email}
            </p>
            <p>
              <strong>Phone:</strong> {customer.customer_phone_number}
            </p>
            <p>
              <strong>Active customer:</strong>{" "}
              {customer.active_customers ? "Yes" : "No"}
            </p>
            <p className="edit ">
              <strong>
                Edit Customer: <FaRegEdit className="text-danger" />
              </strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleCustomer;
