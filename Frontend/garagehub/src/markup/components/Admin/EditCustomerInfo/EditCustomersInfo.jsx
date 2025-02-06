import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customers from "../../../../services/customers.service";
import toast from "react-hot-toast";
import { useAuth } from "../../../../Context/AuthContext";

function EditCustomersInfo() {
  const { customer_id } = useParams();
  const { customerData } = useAuth();

  // State variables for form fields
  const [customer_first_name, setFirstName] = useState("");
  const [customer_last_name, setLastName] = useState("");
  const [customer_phone, setPhoneNumber] = useState("");
  const [active_employee, setActiveEmployee] = useState(1);
  const [serverError, setServerError] = useState("");

  // ✅ Load customer data when available
  useEffect(() => {
    if (customerData) {
      setFirstName(customerData.customer_first_name || "");
      setLastName(customerData.customer_last_name || "");
      setPhoneNumber(customerData.customer_phone || "");
      setActiveEmployee(customerData.active_customers ? 1 : 0);
    }
  }, [customerData]); // Runs when customerData changes

  // ✅ Handle form submission
  const handleForm = async (e) => {
    e.preventDefault();
    const data = {
      customer_first_name,
      customer_last_name,
      customer_phone,
      active_employee,
    };

    try {
      const edit = customers.editCustomer(customer_id, data);
      edit
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setServerError(data.error);
          } else {
            setServerError("");
            toast.success(data.message);
          }
        });
    } catch (error) {
      const resMessage =
        error.response?.data?.message || error.message || error.toString();
      setServerError(resMessage);
    }
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Edit {customer_first_name}</h2>
        </div>
        <div className="contact-title">
          <h4 className="fw-bold">
            Customer Email: {customerData?.customer_email}
          </h4>
        </div>

        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleForm}>
                  <div className="row clearfix">
                    {serverError && (
                      <div className="validation-error" role="alert">
                        {serverError}
                      </div>
                    )}

                    {/* ✅ First Name */}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="customer_first_name"
                        placeholder="Customer First Name"
                        required
                        value={customer_first_name} // ✅ Uses state
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    {/* ✅ Last Name */}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="customer_last_name"
                        placeholder="Customer Last Name"
                        required
                        value={customer_last_name} // ✅ Uses state
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    {/* ✅ Phone Number */}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="customer_phone"
                        placeholder="Customer Phone (555-555-5555)"
                        required
                        value={customer_phone} // ✅ Uses state
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    {/* ✅ Active Checkbox */}
                    <div className="form-group col-md-12">
                      <input
                        type="checkbox"
                        name="active_employee"
                        id="active_employee"
                        style={{ marginRight: "8px" }}
                        checked={active_employee === 1}
                        onChange={(e) =>
                          setActiveEmployee(e.target.checked ? 1 : 0)
                        }
                      />
                      <label htmlFor="active_employee">
                        Is Active Customer
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit">
                        <span>Update</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditCustomersInfo;
