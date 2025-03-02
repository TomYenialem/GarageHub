import React, { useEffect, useState } from "react";
import vehicles from "../../../../services/vehicle.service";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHandPointer } from "react-icons/fa";
import customers from "../../../../services/customers.service";

function GetSingleVehicle({
  customer_id,
  vehicleData,
  showBtn = true,

}) {
  const [vehicleInfo, setVehicleInfo] = useState([]);

  const fetchSingleVehicle = () => {
    const vehiclesInfo = vehicles.CustomerVehicle(customer_id);
    vehiclesInfo.then((data) => {
      setVehicleInfo(data.data);
      vehicleData(data.data);
    });
  };

  useEffect(() => {
    fetchSingleVehicle();
  }, [customer_id]);

  return (
    <>
      <Table
        striped
        bordered
        hover
        className="table-responsive-mobile" // Use w-100 for full-width
      >
        <thead>
          {/* Uncomment and adjust headers as needed */}
          {/* <tr>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Tag</th>
            <th>Serial</th>
            <th>Color</th>
            <th>mileage</th>
            <th>Choose</th>
          </tr> */}
        </thead>
        <tbody className="vehicle_table">
          {vehicleInfo.length > 0 ? (
            vehicleInfo.map((vehicle, index) => (
              <tr key={index}>
                <td>{vehicle.vehicle_year}</td>
                <td>{vehicle.vehicle_make}</td>
                <td>{vehicle.vehicle_model}</td>
                <td>{vehicle.vehicle_tag}</td>
                <td>{vehicle.vehicle_serial}</td>
                <td>{vehicle.vehicle_color}</td>
                <td>{vehicle.vehicle_mileage}</td>

                <td>
                  <Link to={`/admin/orders/${vehicle.vehicle_id}`}>
                    <div
                      className="edit-delete-icons"
                      style={{ cursor: "pointer" }}
                    >
                      <FaHandPointer />
                    </div>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <div colSpan="8" className="text-center">
              <h3 className="text-center mt-4 mb-4">No Vehicle Found!</h3>
              {showBtn && (
                <Link to={`/admin/customer_profile/${customer_id}`}>
                  <button
                    className="theme-btn btn-style-one disabled-btn mb-3"
                    type="submit"
                    cl
                  >
                    Add Vehicle
                  </button>
                </Link>
              )}
            </div>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default GetSingleVehicle;
