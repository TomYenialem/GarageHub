import React, { useEffect, useState } from "react";
import vehicless from "../../../../services/vehicle.service";
import { useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import SingleCustomer from "../SingleCustomer/SingleCustomer";
import { useAuth } from "../../../../Context/AuthContext";
import AdditionalServices from "../AdditionalServices/AdditionalServices";
import { Link } from "react-router-dom";

function EachVehicleInfo() {
  const { serviceDatas, employee } = useAuth();
  const [selectedServices, setSelectedServices] = useState([]);
  const { vehicle_id } = useParams();
  const [vehicleInfo, setVehicleInfo] = useState({});

  const eachVehicleInfo = async () => {
    try {
      const response = await vehicless.singleVehicle(vehicle_id);
      setVehicleInfo(response.data[0]);
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
    }
  };

  useEffect(() => {
    eachVehicleInfo();
  }, [vehicle_id]);

  const checkedService = (service_id, ischecked) => {
    if (ischecked) {
      setSelectedServices([...selectedServices, service_id]);
    } else {
      setSelectedServices(selectedServices.filter((id) => id !== service_id));
    }
  };

  return (
    <div className="container py-4">
      {/* Wrap everything in a row to center the cards */}
      <div className="row g-4 justify-content-center">
        {/* SingleCustomer Card */}
        <div className="col-12 col-md-10 mx-auto">
          <div className="card p-4 shadow mb-4">
            <SingleCustomer
              customer_id={vehicleInfo.customer_id}
              showBackButton={false}
            />
          </div>
        </div>

        {/* Vehicle Details Card */}
        <div className="col-12 col-md-10 mx-auto">
          <div className="card p-4 px-5 shadow mb-4">
            <h2 className="fw-bold mb-3">{vehicleInfo.vehicle_model}</h2>
            <p>
              <strong>Color:</strong> {vehicleInfo.vehicle_color}
            </p>
            <p>
              <strong>Tag:</strong> {vehicleInfo.vehicle_tag}
            </p>
            <p>
              <strong>Year:</strong> {vehicleInfo.vehicle_year}
            </p>
            <p>
              <strong>Serial:</strong> {vehicleInfo.vehicle_serial}
            </p>

            <p className="edit">
              <Link to={`/admin/edit_vehicle/${vehicleInfo.vehicle_id}`}>
                <strong>
                  Edit Vehicle: <FaRegEdit />
                </strong>
              </Link>
            </p>
          </div>
        </div>

        {/* Services List Card */}
        <div className="col-12 col-md-10 mx-auto">
          <div className="card p-4 shadow-sm mb-4">
            <h3 className="fw-bold mb-3">Select Services</h3>
            <div className="row">
              {serviceDatas.length > 0 ? (
                serviceDatas.map((service, index) => (
                  <div key={index} className="col-12 mb-3">
                    <div className="card shadow-sm p-3">
                      <div className="d-flex justify-content-between align-items-center col-md-12 mx-auto">
                        <div className="d-flex flex-column justify-content-center">
                          <label
                            className="fw-bold d-block"
                            htmlFor={`service-${index}`}
                          >
                            {service.service_name}
                          </label>
                          <p className="mb-0 text-muted">
                            {service.service_description}
                          </p>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            required
                            className="form-check-input me-5 mt-4"
                            id={`service-${index}`}
                            style={{
                              width: "20px",
                              height: "20px",
                              border: "2px solid blue",
                              cursor: "pointer",
                            }}
                            onChange={(e) =>
                              checkedService(service.service_id, e.target.checked)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No services available.</p>
              )}
              <div className="col-12">
                <AdditionalServices
                  employee_id={employee?.employee_id}
                  customer_id={vehicleInfo.customer_id}
                  vehicle_id={vehicleInfo.vehicle_id}
                  selectedServices={selectedServices}
                  setSelectedServices={setSelectedServices}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachVehicleInfo;
