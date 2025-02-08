import React, { useEffect, useState } from "react";
import vehicless from "../../../../services/vehicle.service";
import { useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import SingleCustomer from "../SingleCustomer/SingleCustomer";
import { useAuth } from "../../../../Context/AuthContext";
import AdditionalServices from "../AdditionalServices/AdditionalServices";

function EachVehicleInfo() {
  const { serviceDatas } = useAuth();
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

  return (
    <>
      <div>
        <SingleCustomer customer_id={vehicleInfo.customer_id} />
      </div>

      {/* Vehicle Details Card */}
      <div className="card p-4 shadow mb-4">
        <h2 className="fw-bold">{vehicleInfo.vehicle_model}</h2>
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
          <strong>
            Edit Vehicle: <FaRegEdit />
          </strong>
        </p>
      </div>

      {/* Services List with Checkboxes */}
      <div className="card p-4 shadow">
        <h3 className="fw-bold mb-3">Select Services</h3>
        <div className="row">
          {serviceDatas.length > 0 ? (
            serviceDatas.map((service, index) => (
              <div key={index} className="col-md-6">
                <div className="card shadow-sm p-3 mb-3 services">
                  <div>
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
                      className="form-check-input me-3"
                      id={`service-${index}`}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No services available.</p>
          )}
          <div>
            <AdditionalServices/>
          </div>
        </div>
      </div>
    </>
  );
}

export default EachVehicleInfo;
