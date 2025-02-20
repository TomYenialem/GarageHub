import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import updateEmployee from "../../.././../services/employee.service";
import toast from "react-hot-toast";
import SingleEmployee from "../SingleEmployee/SingleEmployee";
import { PulseLoader } from "react-spinners";

import { useAuth } from '../../../../Context/AuthContext'
function EditEmployeeInfo() {
  const { employee_id} = useParams();
  const {isAdmin}=useAuth()

  const [employee_first_name, setFirstName] = useState("");
  const [employee_last_name, setLastName] = useState("");
  const [employee_phone, setPhoneNumber] = useState("");
  const [active_employee, setActiveEmployee] = useState(1);
  const [company_role_id, setCompany_role_id] = useState(1);
  const [serverError, setServerError] = useState("");
  const [employeeData, setEmployeeData] = useState({});
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const handlelForm = (e) => {
    e.preventDefault();
    if(!isAdmin){
      toast.error("Only Admin can edit employees")
      return;
    }
    setLoading(true)
    const data = {
      employee_first_name,
      employee_last_name,
      employee_phone,
      active_employee,
      company_role_id,
    };
    const response = updateEmployee.editEmployee(employee_id, data);
    try {
      response.then((data) => {
        if (data.error) {
          setServerError(data.error);
          console.log(data.error);
        } else {
          setServerError("");
          toast.success("employees updated successfully");
          navigate(-1)
        }
      });
    } catch (error) {
      const resMessage =
        error.response?.data?.message || error.message || error.toString();
      setServerError(resMessage);
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    if (employeeData) {
      setFirstName(employeeData.employee_first_name || "");
      setLastName(employeeData.employee_last_name || "");
      setPhoneNumber(employeeData.employee_phone || "");
      setActiveEmployee(employeeData.active_employee ? 1 : 0);
    }
  }, [employeeData]);
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Edit {employeeData.employee_first_name}</h2>
        </div>
        <SingleEmployee
          employee_id={employee_id}
          employeeData={(data) => setEmployeeData(data)}
        />
        <div className="d-none"></div>

        <div className="contact-title">
          <h4 className="fw-bold">
            employee Email: {employeeData?.employee_email}
          </h4>
        </div>

        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handlelForm}>
                  <div className="row clearfix">
                    {serverError && (
                      <div className="validation-error" role="alert">
                        {serverError}
                      </div>
                    )}

                    {/* ✅ First Name */}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_first_name"
                        placeholder="employee First Name"
                        required
                        value={employee_first_name} // ✅ Uses state
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    {/* ✅ Last Name */}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_last_name"
                        placeholder="employee Last Name"
                        required
                        value={employee_last_name} // ✅ Uses state
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    {/* ✅ Phone Number */}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        placeholder="employee Phone (555-555-5555)"
                        required
                        value={employee_phone} // ✅ Uses state
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <select
                        name="employee_role"
                        value={company_role_id}
                        onChange={(event) =>
                          setCompany_role_id(event.target.value)
                        }
                        className="custom-select-box"
                      >
                        <option value="1">Employee</option>
                        <option value="2">Manager</option>
                        <option value="3">Admin</option>
                      </select>
                    </div>

                    {/* ✅ Active Checkbox */}
                    <div className="form-group col-md-12">
                      <input
                        type="checkbox"
                        name="active_employee"
                        id="active_employee"
                        style={{ marginRight: "8px" }}
                        checked={active_employee === 1}
                        onChange={(e) =>
                          setActiveEmployee(e.target.checked ? 1 : 0)
                        }
                      />
                      <label htmlFor="active_employee">
                        Is Active employee
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        disabled={loading}
                      >
                        <span>
                          {loading ? (
                            <div>
                              <span>please wait </span>
                              <span>
                                <PulseLoader size={10} color={"#123abc"} />
                              </span>
                            </div>
                          ) : (
                            "Update"
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

export default EditEmployeeInfo;
