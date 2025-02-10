import React, { useState } from "react";
import AddVechile from "../../../pages/admin/AddVechile";
import SingleCustomer from "../SingleCustomer/SingleCustomer";
import { useParams } from "react-router-dom";
import GetSingleVehicle from "../GetSinngelVehicle/GetSingleVehicle";
import GetSingleOrder from "../GetSingleOrder/GetSingleOrder";

function CustomerProfile() {

  const [vehicleData,setVehicleData]=useState([])
  
  const [modal, setModal] = useState(false);
  const [customerData, setCustomerData] = useState([]); 
  // Use state to hold customer data
  const { customer_id } = useParams();


  return (
    <>
      <div className="container mt-4">
        {/* Info Section */}
        <div className="row align-items-center ">
          {/* Move "Info" button into the same row as customer details */}
          <div className="col-md-2 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Info
            </button>
          </div>

          {/* Customer Details in the same row */}
          <div className="col-md-10">
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
        <div className="row pt-3">
         
        </div>

        <hr className="my-2" />

        {/* Cars Section */}
        <div className="row align-items-center pt-3">
          <div className="col-md-2 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Cars
            </button>
            <div className="vr my-1" style={{ height: "100px" }}></div>
          </div>
          <div className="col-md-10 mb-5">
            <h3 className="bold mb-3">
              Vehicle of {customerData?.customer_first_name}
            </h3>{
              vehicleData.length>0 ? <>
              
              <GetSingleVehicle customer_id={customer_id} vehicleData={(data)=>setVehicleData(data)}/>
              </>
              :
              <p className="text-center text-danger bold">No Vehicle Found</p>
            }
          
            <button
              className="theme-btn btn-style-one mt-2"
              onClick={() => setModal(true)}
            >
              Add Vehicle
            </button>
          </div>
          <div>
            {modal && (
              <div className="col-md-8">
                <div className="modal-overlay">
                  <div className="modal-content position-relative p-4 bg-white rounded shadow">
                    {/* Close Button */}
                    <button
                      className="btn-close  top-0 left-0 end-0 m-2"
                      onClick={() => setModal(false)}
                    >
                      X
                    </button>
                    <AddVechile customer_id={customer_id} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <hr className="my-2" />

        {/* Orders Section */}
        <div className="row align-items-center p-3">
          <div className="col-md-2 d-flex flex-column align-items-center text-center">
            <button
              className="theme-btn btn-style-one d-flex align-items-center justify-content-center"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            >
              Orders
            </button>
            <div className="vr my-1"></div>
          </div>
          <div className="col-md-10">
            <h3 className="bold">Orders of {customerData?.customer_first_name}</h3>
            <h6 className="mb-0">
             <GetSingleOrder customer_id={customerData.customer_id}/>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
