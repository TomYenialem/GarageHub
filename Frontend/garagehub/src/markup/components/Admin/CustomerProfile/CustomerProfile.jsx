import React, { useRef, useState,useEffect } from "react";
import AddVechile from "../../../pages/admin/AddVechile";
import SingleCustomer from "../SingleCustomer/SingleCustomer";
import { useNavigate, useParams } from "react-router-dom";
import GetSingleVehicle from "../GetSinngelVehicle/GetSingleVehicle";

import vehicles from "../../../../services/vehicle.service";
import SingleCustomerAllorders from "../SingleCustomerAllorders/SingleCustomerAllorders";
function CustomerProfile() {
  const navigate = useNavigate();
    const { customer_id } = useParams();
  const [vehicleData, setVehicleData] = useState([]);
  const [modal, setModal] = useState(false);
  const [customerData, setCustomerData] = useState([]);

    const fetchSingleVehicle = () => {
      vehicles.CustomerVehicle(customer_id).then((data) => {
        setVehicleData(data.data);
      });
    };

    useEffect(() => {
      fetchSingleVehicle();
    }, [customer_id]);

  return (
    <>
      <div className="container mt-4 m-3">
        {/* Info Section */}
        <div className="row align-items-center customer_pro mb-4">
          {" "}
          {/* Added margin-bottom */}
          <div className="col-md-1 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Info
            </button>
          </div>
          <div className="col-md-11">
            <SingleCustomer
              customer_id={customer_id}
              showBackButton={false}
              customerData={(data) => setCustomerData(data)}
            />
          </div>
        </div>

        <hr className="my-3" />

        {/* Cars Section */}
        <div className="row align-items-center pt-3 mb-4">
          {" "}
          {/* Added margin-bottom */}
          <div className="col-md-1 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Cars
            </button>
            <div className="vr my-2" style={{ height: "80px" }}></div>{" "}
            {/* Adjusted spacing */}
          </div>
          <div className="col-md-11 mb-4">
            {" "}
            {/* Added margin-bottom */}
            <h3 className="bold mb-3">
              Vehicle of {customerData?.customer_first_name}
            </h3>
            <GetSingleVehicle
              customer_id={customerData?.customer_id}
              vehicleData={(data) => setVehicleData(data)}
              showBtn={false}
            />
            <button
              className="theme-btn btn-style-one mt-3" /* Adjusted margin */
              onClick={() => setModal(true)}
            >
              Add Vehicle
            </button>
          </div>
          {modal && (
            <div className="col-md-10 vehicle_modal">
              <div className="modal-overlay mx-auto">
                <div className="modal-content mb-5 p-3 rounded">
                  {" "}
                  {/* Added padding and rounded edges */}
                  <div className="add_vehilces mb-4">
                    <AddVechile
                      customer_id={customer_id}
                      onVehicleAdded={() => {
                        setModal(false);
                        fetchSingleVehicle();
                      }}
                    />
                    <div className="closes">
                      <button
                        className="btn-close text-white bg-danger p-2 rounded-circle" /* Adjusted button style */
                        onClick={() => setModal(false)}
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <hr className="my-3" />

        {/* Orders Section */}
        <div className="row align-items-center p-3 mb-4">
          {" "}
          {/* Added margin-bottom */}
          <div className="col-md-1 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Orders
            </button>
            <div className="vr my-2"></div> {/* Adjusted spacing */}
          </div>
          <div className="col-md-11">
            <h3 className="bold">
              Orders of {customerData?.customer_first_name}
            </h3>
            <SingleCustomerAllorders customer_id={customerData?.customer_id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
