import React, { useRef, useState,useEffect } from "react";
import AddVechile from "../../../pages/admin/AddVechile";
import SingleCustomer from "../SingleCustomer/SingleCustomer";
import { useNavigate, useParams } from "react-router-dom";
import GetSingleVehicle from "../GetSinngelVehicle/GetSingleVehicle";
import GetSingleOrder from "../GetSingleOrder/GetSingleOrder";
import vehicles from "../../../../services/vehicle.service";
import SingleCustomerAllorders from "../SingleCustomerAllorders/SingleCustomerAllorders";
function CustomerProfile() {
  const navigate = useNavigate();
    const { customer_id } = useParams();
  const [vehicleData, setVehicleData] = useState([]);
  const [modal, setModal] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  console.log(customerData)
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
        <div className="row align-items-center customer_pro ">
          {/* Move "Info" button into the same row as customer details */}
          <div className="col-md-1 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Info
            </button>
          </div>

          {/* Customer Details in the same row */}
          <div className="col-md-11">
            {/* Pass the customerData to SingleCustomer */}
            <SingleCustomer
              customer_id={customer_id}
              showBackButton={false}
              customerData={(data) => setCustomerData(data)} // Set data to state
            />
          </div>
        </div>

        <hr className="my-2" />

        {/* Display Customer Info */}
        <div className="row pt-3"></div>

        <hr className="my-2" />

        {/* Cars Section */}
        <div className="row align-items-center pt-3">
          <div className="col-md-1 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Cars
            </button>
            <div className="vr my-1" style={{ height: "100px" }}></div>
          </div>
          <div className="col-md-11 mb-5">
            <h3 className="bold mb-3">
              Vehicle of {customerData?.customer_first_name}
            </h3>

            <>
              <GetSingleVehicle
                customer_id={customerData?.customer_id}
                vehicleData={(data) => setVehicleData(data)}
                showBtn={false}
              />
            </>

            <button
              className="theme-btn btn-style-one mt-2"
              onClick={() => setModal(true)}
            >
              Add Vehicle
            </button>
          </div>
          <div>
            {modal && (
              <div className="col-md-8 vehicle_modal">
                <div className="modal-overlay mx-auto">
                  <div className="modal-content mb-5">
                    <div className="add_vehilces mb-4">
                      <AddVechile
                        customer_id={customer_id}
                        onVehicleAdded={() => {setModal(false);fetchSingleVehicle();}}
                      />
                      <div className="closes">
                        <button
                          className="btn-close  bg-danger"
                          onClick={() => setModal(false)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <hr className="my-2" />

        {/* Orders Section */}
        <div className="row align-items-center p-3">
          <div className="col-md-1 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Orders
            </button>
            <div className="vr my-1"></div>
          </div>
          <div className="col-md-11">
            <h3 className="bold">
              Orders of {customerData?.customer_first_name}
            </h3>
            <h6 className="mb-0">
             <SingleCustomerAllorders customer_id={customerData.customer_id}/>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
