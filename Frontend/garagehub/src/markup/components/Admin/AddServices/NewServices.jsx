import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import serv from "../../../../services/services.service";
import toast from "react-hot-toast";

function NewServices() {
  const [service_name, setService_name] = useState("");
  const [service_description, setService_description] = useState("");
  const [serverError, setServerError] = useState("");
  const [serviceDatas, setServiceDatas] = useState([]);
  const [editingId, setEditingId] = useState(null); // Track edit mode

  // Fetch services on mount
  const fetchDatas = () => {
    serv.getAllServcies().then((res) =>
      res.json().then((data) => {
        setServiceDatas(data.data);
      })
    );
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  // Handle Add or Edit based on `editingId`
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { service_name, service_description };

    try {
      if (editingId) {
        // Edit existing service
        const response = await serv.editService(editingId, data);
        const result = await response.json();

        if (result.error) {
          setServerError(result.error);
        } else {
          toast.success("Service updated successfully");
          setServiceDatas((prev) =>
            prev.map((service) =>
              service.service_id === editingId
                ? { ...service, ...data }
                : service
            )
          );
          resetForm();
          fetchDatas();
        }
      } else {
        // Add new service
        const response = await serv.addNewServices(data);
        const result = await response.json();

        if (result.error) {
          setServerError(result.error);
        } else {
          toast.success("New service added successfully");
          setServiceDatas([...serviceDatas, result.data]);
          resetForm();
          fetchDatas();
        }
      }
    } catch (error) {
      console.log(error);
      setServerError("Something went wrong. Please try again.");
    }
  };

  // Delete service
  const deleteServices = async (service_id) => {
    try {
      const response = await serv.deleteService(service_id);
      const result = await response.json();

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Service deleted successfully");
        setServiceDatas(
          serviceDatas.filter((service) => service.service_id !== service_id)
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete service");
    }
  };

  // Prepare form for editing
  const editInputValues = (service) => {
    setService_name(service.service_name);
    setService_description(service.service_description);
    setEditingId(service.service_id); // Set editing ID
  };

  // Reset form after submit or cancel
  const resetForm = () => {
    setService_name("");
    setService_description("");
    setEditingId(null);
    setServerError("");
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="col-md-10">
          <div className="contact-title">
            <h4>Services We Provide</h4>
          </div>

          {/* Services List */}
          {serviceDatas.map((service, index) => (
            <div key={index} className="row bg-white d-flex p-2 mb-2">
              <div className="col-md-10">
                <h5>{service.service_name}</h5>
                <p>{service.service_description}</p>
              </div>
              <div className="col-md-2 d-flex justify-content-center delete_edit_icons">
                <span
                  className="text-primary me-3"
                  role="button"
                  onClick={() => editInputValues(service)}
                >
                  <FaRegEdit />
                </span>
                <span
                  className="text-danger"
                  role="button"
                  onClick={() => deleteServices(service.service_id)}
                >
                  <MdDelete />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add or Edit Service Form */}
        <div className="service-box col-md-10 mt-5">
          <div className="contact-title">
            <h2>{editingId ? "Edit Service" : "Add a New Service"}</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-10">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    {serverError && (
                      <div
                        className="validation-error text-danger"
                        role="alert"
                      >
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
                          onChange={(e) => setService_name(e.target.value)}
                          placeholder="Service Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-10">
                        <textarea
                          type="text"
                          required
                          name="service_description"
                          value={service_description}
                          onChange={(e) =>
                            setService_description(e.target.value)
                          }
                          placeholder="Service Description"
                          className="form-control"
                          rows="3"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                        >
                          <span>
                            {editingId ? "Update Service" : "Add Service"}
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
      </div>
    </section>
  );
}

export default NewServices;
