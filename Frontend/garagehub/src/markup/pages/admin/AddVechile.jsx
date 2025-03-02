import React, { useState ,useEffect} from "react";
import vehicles from "../../../services/vehicle.service";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { useAuth } from "../../../Context/AuthContext";

function AddVechile({ customer_id,onVehicleAdded,  existingVehicle }) {
  const [vehicle_year, setVehicle_year] = useState("");
  const [vehicle_make, setVehicle_make] = useState("");
  const [vehicle_model, setVehicle_model] = useState("");
  const [vehicle_type, setVehicle_type] = useState("");
  const [vehicle_mileage, setVehicle_mileage] = useState("");
  const [vehicle_tag, setVehicle_tag] = useState("");
  const [vehicle_serial, setvehicle_serial_number] = useState("");
  const [vehicle_color, setVehicle_color] = useState("");
  const [serverError, setServerError] = useState("");
  const[loading,setLoading]=useState(false)
  const {isAdmin}=useAuth()
  
  const navigate=useNavigate()


  // const isEditing=Boolean(existingVehicle)
  const isEditing = !!existingVehicle;

  // same as let isEditing;

  // if (existingVehicle) {
  //   isEditing = true;
  // } else {
  //   isEditing = false;
  // }
  // console.log(existingVehicle)

  useEffect(() => {
    if (isEditing) {
      setVehicle_year(existingVehicle.vehicle_year || "");
      setVehicle_make(existingVehicle.vehicle_make || "");
      setVehicle_model(existingVehicle.vehicle_model || "");
      setVehicle_type(existingVehicle.vehicle_type || "");
      setVehicle_mileage(existingVehicle.vehicle_mileage || "");
      setVehicle_tag(existingVehicle.vehicle_tag || "");
     setvehicle_serial_number(existingVehicle.vehicle_serial || "");
      setVehicle_color(existingVehicle.vehicle_color || "");
    }
  }, [existingVehicle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAdmin){
      toast.error("Only admin can add/edit vehicles");
      return;
    }
      
      setLoading(true);

    const payload = {
      customer_id: isEditing ? existingVehicle?.customer_id : "",
      vehicle_year,
      vehicle_make,
      vehicle_model,
      vehicle_type,
      vehicle_mileage,
      vehicle_tag,
      vehicle_serial,
      vehicle_color,
    };       

    let response;
    if (isEditing) {
      response = vehicles.editVehicle(existingVehicle.vehicle_id, payload);
    }else{
      response = vehicles.addVehicles(customer_id, payload);

    }
    response
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setServerError(data.error);
        } else {
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
          navigate(0)
          // window.location.reload();
          if(!isEditing){
            onVehicleAdded()
 
          }
          if(isEditing){
            navigate(-1)
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
      })
      .finally(() => {
        setLoading(false)
      });
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2 className="vehicle_titles">{isEditing ? "Edit Vehicle" : "Add a new vehicle"}</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-10">
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

                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        disabled={loading} // ✅ Disable button when loading
                      >
                        <span>
                          {loading ? (
                            <div>
                              <span>please wait </span>
                              <PulseLoader size={10} color={"#123abc"} />
                            </div>
                          ) : (
                            <span>{isEditing ? "Update" : "Add Vehicle"}</span>
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
  );
}

export default AddVechile;
