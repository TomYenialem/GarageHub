import React, { useState } from 'react'

function AddVechile() {
 const [vehicle_year, setVehicle_year] = useState("");
  const [vehicle_make,setVehicle_make] = useState("");
  const [vehicle_model,setVehicle_model] = useState("");
  const [vehicle_type, setVehicle_type] = useState("");
  const [vehicle_mileage, setVehicle_mileage] = useState("");
  const [vehicle_tag, setVehicle_tag] = useState('');
  const [vehicle_serial_number, setvehicle_serial_number] = useState("");
  const [vehicle_color,setVehicle_color]=useState('')
  // Errors
  const [emailError, setEmailError] = useState("");
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");




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
                <form>
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
                      {emailError && (
                        <div className="validation-error" role="alert">
                          {emailError}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="vehicle_made"
                        value={vehicle_make}
                        onChange={(event) =>
                          setVehicle_make(event.target.value)
                        }
                        placeholder="vehicle_made"
                      />
                      {firstNameRequired && (
                        <div className="validation-error" role="alert">
                          {firstNameRequired}
                        </div>
                      )}
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
                        type="password"
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
                        value={vehicle_serial_number}
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
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
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

export default AddVechile