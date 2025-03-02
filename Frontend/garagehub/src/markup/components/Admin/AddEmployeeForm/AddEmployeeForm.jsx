import React, { useState } from "react";
import employeeService from "../../../../services/employee.service";
import { useAuth } from "../../../../Context/AuthContext";
import { PulseLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddEmployeeForm(props) {
  const [employee_email, setEmail] = useState("");
  const [employee_first_name, setFirstName] = useState("");
  const [employee_last_name, setLastName] = useState("");
  const [employee_phone, setPhoneNumber] = useState(null);
  const [employee_password, setPassword] = useState("");
  const [active_employee, setActive_employee] = useState(1);
  const [company_role_id, setCompany_role_id] = useState(1);

  // Errors
  const [emailError, setEmailError] = useState("");
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false); 
  const  navigates=useNavigate()

  let loggedInEmployeeToken = "";
  const { employee,isAdmin } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

 const handleSubmit = (e) => {
   e.preventDefault();
   setLoading(true);
   if(!isAdmin){
     toast.error("You are not authorized to perform this action.");
     return setLoading(false);
   }

   const formData = {
     employee_email,
     employee_first_name,
     employee_last_name,
     employee_phone: employee_phone || "", // Ensure it's not null
     employee_password,
     active_employee: Number(active_employee), // Ensure number type
     company_role_id: Number(company_role_id), // Ensure number type
   };



   employeeService
     .createEmployee(formData)
    .then((data)=>{
      if(data.error){
        return setServerError(error)
      }
      toast.success(data.message);
      navigates("/admin/employees");

    }) 
     .catch((error) => {
       setServerError(error.message);
       console.error("❌ Request Error:", error);
     })
     .finally(() => {
       setLoading(false);
     });
 };


  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new employee</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError && (
                        <div className="validation-error" role="alert">
                          {serverError}
                        </div>
                      )}
                      <input
                        type="email"
                        name="employee_email"
                        value={employee_email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Employee email"
                      />
                      {emailError && (
                        <div className="validation-error" role="alert">
                          {emailError}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_first_name"
                        value={employee_first_name}
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder="Employee first name"
                      />
                      {firstNameRequired && (
                        <div className="validation-error" role="alert">
                          {firstNameRequired}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_last_name"
                        value={employee_last_name}
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder="Employee last name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        value={employee_phone}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Employee phone (555-555-5555)"
                        required
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

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="employee_password"
                        value={employee_password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Employee password"
                      />
                      {passwordError && (
                        <div className="validation-error" role="alert">
                          {passwordError}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        disabled={loading} // ✅ Disable button when loading
                      >
                        <span>
                          {loading ? (
                            <div>
                              <span>please wait </span>
                              <PulseLoader size={10} color={"#123abc"} />
                            </div>
                          ) : (
                            "Add Employee"
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

export default AddEmployeeForm;
