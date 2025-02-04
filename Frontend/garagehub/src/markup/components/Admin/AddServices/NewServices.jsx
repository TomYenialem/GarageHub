import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import  serv from '../../../../services/services.service'


import toast from 'react-hot-toast';


function NewServices() {
    const [service_name,setServcie_name]=useState('')
    const [service_description,setService_desciptions]=useState('')
          const [serverError, setServerError] = useState("");
const handleSubmit =(e)=>{ 
  e.preventDefault();
  const data = {
    service_name:service_name,
    service_description:service_description
  }
  try {
    const newService = serv.addNewServices(data);
    newService.then((res)=>  res.json().then((data)=>{
      if(data.error){
        setServerError(data.error);
      }
      else{
        setServerError('')
        toast.success('new server added')
      }
    }))
  } catch (error) {
    console.log(error)
    const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setServerError(resMessage);
  }

}
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="col-md-10">
          <div className="contact-title">
            <h4>Service we provide</h4>
          </div>
          <div className="row bg-white d-flex align-items-center p-1 ">
            <div className="col-md-10">
              <h5>Oil Change</h5>
              <p>Every 5000km you should chage the oil of the car</p>
            </div>
            <div className="col-md-2 delete_edit_icons">
              <span className="text-danger">
                <FaRegEdit />
              </span>
              <span>
                <MdDelete />
              </span>
            </div>
          </div>
        </div>
        <div className="servcie-box col-md-10 mt-5">
          <div className="contact-title">
            <h2>Add a New Service</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-10">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    {serverError && (
                      <div className="validation-error" role="alert">
                        {serverError}
                      </div>
                    )}
                    <div className="row clearfix">
                      <div className="form-group col-md-10">
                        <input
                          type="text"
                          required
                          name="ServiceName"
                          value={service_name}
                          onChange={(event) =>
                            setServcie_name(event.target.value)
                          }
                          placeholder="Service_Name"
                        />
                      </div>
                      <div className="form-group col-md-10">
                        <textarea
                          type="text"
                          required
                          name="service_describitions"
                          value={service_description}
                          onChange={(event) =>
                            setService_desciptions(event.target.value)
                          }
                          placeholder="Service_Describitions"
                        />
                      </div>
                      <div className="form-group col-md-10">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>Add New Services</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewServices