import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginService from "../../../services/login.service";
import ClipLoader from "react-spinners/ClipLoader";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [employee_email, setEmail] = useState("");
  const [employee_password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Handle client side validations here
    let valid = true; // Flag
    // Email validation
    if (!employee_email) {
      setEmailError("Please enter your email address first");
      valid = false;
    } else if (!employee_email.includes("@")) {
      setEmailError("Invalid email format");
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(employee_email)) {
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    // Password has to be at least 6 characters long
    if (!employee_password || employee_password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!valid) {
      setLoading(false);
      return;
    }
    // Handle form submission here
    const formData = {
      employee_email,
      employee_password,
    };
    // console.log(formData);
    // Call the service
 
    
  try {
    const response = await loginService.login(formData);
    const data = await response.json();
    console.log("Server Response:", data);

    if (data.status === "success") {
      localStorage.setItem("employee", JSON.stringify(data.data));
      navigate("/");
    } else {
      setServerError(data.message);
    }
  } catch (err) {
    console.error("Login Error:", err);
    setServerError("An error occurred. Please try again later.");
  }

  setLoading(false); // Stop loading AFTER the request completes
};
  

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Login to your account</h2>
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
                        placeholder="Email"
                      />
                      {emailError && (
                        <div className="validation-error" role="alert">
                          {emailError}
                        </div>
                      )}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="employee_password"
                        value={employee_password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
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
                        data-loading-text="Please wait..."
                      >
                        <span>
                          {loading ? (
                          

                          // disbaled the button when loading


                            < div className="d-flex justify-content-center align-items-center" >

                              <ClipLoader size={17} color="white"  />   please
                              wait...
                            </div>
                          ) : (
                            "Login"
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

export default LoginForm;
