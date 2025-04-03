import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginService from "../../../services/login.service";
import PulseLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [employee_email, setEmail] = useState("");
  const [employee_password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const[showModal,setShowModal]=useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
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
    console.log(formData);
    // Call the service
    const loginEmployee = loginService.logIn(formData);
    console.log(loginEmployee);
    loginEmployee
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          // Save the user in the local storage
          if (response.data.employee_token) {
            console.log(response.data);
            localStorage.setItem("employee", JSON.stringify(response.data));
          }
          // Redirect the user to the dashboard
          // navigate('/admin');
          console.log(location);
          if (location.pathname === "/login") {
            // navigate('/admin');
            // window.location.replace('/admin');
            // To home for now
            window.location.replace("/");
          } else {
           window.location.reload()
          }
        } else {
          // Show an error message
          setServerError(response.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setServerError("An error has occurred. Please try again later." + err);
      })
      .finally(()=>{
        setLoading(false);
      })
  };

function guestLogin() {
  setEmail("Guest@gmail.com");
  setPassword("12345678");

  const userConfirmed = window.confirm(
    "YOU HAVE LIMITED ACCESS TO THE ADMIN PANEL. Do you want to continue?"
  );

  if (userConfirmed) {
    navigate("/admin"); // Navigate only if user clicks "OK"
  }
}

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

                    <div
                      className="form-group col-md-12"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        disabled={loading}
                        style={{ flex: "1" }}
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
                            "Login"
                          )}
                        </span>
                      </button>

                      <button
                        onClick={guestLogin}
                        className="theme-btn btn-style-one"
                        style={{
                          flex: "1",
                          backgroundColor: "#f39c12",
                          color: "#fff",
                        }} 
                      >
                        Login as a Guest
                      </button>
                    </div>

                    <p
                      style={{
                        
                      }}
                    >
                      <p>
                        <strong>
                          Don't have an account?
                        </strong>
                        You can{" "}
                        <strong style={{color: 'blue'}}>log in as a guest</strong>{" "}
                        to explore the admin page. Since the page contains{" "}
                        <span className="text-danger bold">
                          sensitive information
                        </span>
                        , your access will be{" "}
                        <span >
                          limited to certain resources
                        </span>
                        .
                      </p>
                    </p>
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
