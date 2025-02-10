import React, { useEffect, useState } from "react";
import vehicles from "../../../../services/vehicle.service";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHandPointer } from "react-icons/fa";
import customers from "../../../../services/customers.service";

function GetSingleVehicle({ customer_id,vehicleData}) {

  const [vehicleInfo, setVehicleInfo] = useState([]);
  const fetchSingleVehicle = () => {
    const vehcielsInfo = vehicles.CustomerVehicle(customer_id);
    vehcielsInfo.then((data) => {
      setVehicleInfo(data.data);
      vehicleData(data.data);
    });
  };
  useEffect(() => {
    fetchSingleVehicle();
  }, [customer_id]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
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
        <tbody>
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
            <tr>
              <td colSpan="8" className="text-center">
                <h1 className="text-center mt-4">No Vehicle Found!</h1>
                <Link
                  to={`/admin/customer_profile/${customer_id}`}
                >
                  <button
                    className="theme-btn btn-style-one disabled-btn"
                    type="submit"
                  >
                    Add Vehicle
                  </button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default GetSingleVehicle;
