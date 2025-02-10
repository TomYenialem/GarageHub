import React, { useState } from "react";
import vehicles from "../../../services/vehicle.service";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function AddVechile({ customer_id }) {
  const [vehicle_year, setVehicle_year] = useState("");
  const [vehicle_make, setVehicle_make] = useState("");
  const [vehicle_model, setVehicle_model] = useState("");
  const [vehicle_type, setVehicle_type] = useState("");
  const [vehicle_mileage, setVehicle_mileage] = useState("");
  const [vehicle_tag, setVehicle_tag] = useState("");
  const [vehicle_serial, setvehicle_serial_number] = useState("");
  const [vehicle_color, setVehicle_color] = useState("");
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Check if the request came from another route (by looking for 'from' in location.state)
  const previousPath = location.state?.from || null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      vehicle_year,
      vehicle_make,
      vehicle_model,
      vehicle_type,
      vehicle_mileage,
      vehicle_tag,
      vehicle_serial,
      vehicle_color,
    };

    // Pass the form data to the service
    const serviceResponses = vehicles.addVehicles(customer_id, payload);

    serviceResponses
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setServerError(data.error);
        } else {
          // Reset all fields after successful submission
          setvehicle_serial_number("");
          setVehicle_color("");
          setVehicle_make("");
          setVehicle_model("");
          setVehicle_tag("");
          setVehicle_type("");
          setVehicle_year("");
          setVehicle_mileage("");
          setServerError("");
          toast.success(data.message);

          // Navigate back if `previousPath` exists, otherwise stay on the current route
          if (previousPath) {
            navigate(previousPath); // Navigate back to the previous route
          }
        }
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setServerError(resMessage);
      });
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new vehicle</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError && (
                        <div className="validation-error" role="alert">
                          {serverError}
                        </div>
                      )}
                      <input
                        type="text"
                        name="vehicle_year"
                        value={vehicle_year}
                        onChange={(event) =>
                          setVehicle_year(event.target.value)
                        }
                        placeholder="vehicle_year"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_make"
                        value={vehicle_make}
                        onChange={(event) =>
                          setVehicle_make(event.target.value)
                        }
                        placeholder="vehicle_make"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_model"
                        value={vehicle_model}
                        onChange={(event) =>
                          setVehicle_model(event.target.value)
                        }
                        placeholder="vehicle_model"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_type"
                        value={vehicle_type}
                        onChange={(event) =>
                          setVehicle_type(event.target.value)
                        }
                        placeholder="vehicle_type"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_mileage"
                        value={vehicle_mileage}
                        onChange={(event) =>
                          setVehicle_mileage(event.target.value)
                        }
                        placeholder="vehicle_mileage"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_tag"
                        value={vehicle_tag}
                        onChange={(event) => setVehicle_tag(event.target.value)}
                        placeholder="vehicle_tag"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_serial_number"
                        value={vehicle_serial}
                        onChange={(event) =>
                          setvehicle_serial_number(event.target.value)
                        }
                        placeholder="vehicle_serial_number"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_color"
                        value={vehicle_color}
                        onChange={(event) =>
                          setVehicle_color(event.target.value)
                        }
                        placeholder="vehicle_color"
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit">
                        <span>Add Vehicle</span>
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

export default AddVechile;
