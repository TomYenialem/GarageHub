import React, { useState } from "react";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import orders from "../../../services/order.service";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import { useAuth } from "../../../Context/AuthContext";

function EditOrders() {
  const [loading, setLoading] = useState(false);
  const [order_status, setorder_status] = useState(0);
  const [serverError, setServerError] = useState("");
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const { order_id } = useParams();
  const editOrdersInfo = (e) => {
    e.preventDefault();
    if (!isAdmin) {
      toast.error("You must be an admin to access this page");
      return;
    }
    const update = {
      order_status,
    };
    setLoading(true);
    try {
      const editOrders = orders.editOrders(order_id, update);
      editOrders.then((data) => {
        if (data.error) {
          setServerError(data.error);
          setLoading(false);
        } else {
          toast.success("Order updated successfully");
          navigate(-1);
          setServerError("");
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
          <section className="contact-section">
            <div className="auto-container">
              <div className="contact-title">
                <h2>Edit</h2>
              </div>

              <div className="row clearfix">
                <div className="form-column col-lg-7">
                  <div className="inner-column">
                    <div className="contact-form">
                      <form onSubmit={editOrdersInfo}>
                        <div className="row clearfix">
                          {serverError && (
                            <div className="validation-error" role="alert">
                              {serverError}
                            </div>
                          )}

                          <div className="form-group col-md-12">
                            <select
                              value={order_status}
                              onChange={(e) =>
                                setorder_status(parseFloat(e.target.value))
                              }
                            >
                              <option value={0}>Received</option>
                              <option value={1}>In Progress</option>
                              <option value={2}>Completed</option>
                            </select>
                          </div>

                          {/* Submit Button */}
                          <div className="form-group col-md-12">
                            <button
                              className="theme-btn btn-style-one"
                              type="submit"
                              disabled={loading}
                            >
                              <span>
                                {loading ? (
                                  <div>
                                    <span>please wait </span>
                                    <span>
                                      <PulseLoader
                                        size={10}
                                        color={"#123abc"}
                                      />
                                    </span>
                                  </div>
                                ) : (
                                  "Update"
                                )}
                              </span>
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
        </div>
      </div>
    </div>
  );
}

export default EditOrders;
