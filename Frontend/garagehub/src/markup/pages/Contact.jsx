import React, { useState } from "react";
import img4 from "../../assets/images/images/gallery/four.jpg";
import toast from "react-hot-toast";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [firstNameRequired, setFirstNameRequired] = useState("");
  const [msgRequired, setMsgRequired] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit =  (e) => {
   e.preventDefault()
    e.preventDefault();

    setLoading(true);
    let valid = true;

    if (!first_name) {
      setFirstNameRequired("First name is required");
      valid = false;
    } else {
      setFirstNameRequired("");
      setFirstName('')
    }
    if (!msg) {
      setMsgRequired("please type some messages");
      valid = false;
    } else {
      setMsg("");
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
    setEmail('')
      }
    }

    if (!valid) {
      setLoading(false);
      return;
    }
    if(valid){
        toast.success('message sent successfully')
    }
  };
  return (
    <div>
      <section className="page-title" style={{ backgroundImage: `url(${img4})` }}>
        <div className="auto-container">
          <h2>Contact</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>

      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Drop us message</h2>
            <div className="text">
              Praising pain was born and I will give you a complete account of
              the system, and{" "}
            </div>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="form_name"
                          value={first_name}
                          onChange={(e)=>setFirstName(e.target.value)}

                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <textarea
                          name="form_message"
                          placeholder="Massage"
                          value={msg}
                          onChange={(e)=>setMsg(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          id="form_botcheck"
                          name="form_botcheck"
                          className="form-control"
                          type="hidden"
                          value=""
                        />
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>Submit now</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="info-column col-lg-5">
              <div className="inner-column">
                <h4>Our Address</h4>
                <div className="text">
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service.
                </div>
                <ul>
                  <li>
                    <i className="flaticon-pin"></i>
                    <span>Address:</span> Addis Ababa Ethiopia
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>email:</span> contact@buildtruck.com
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    <span>phone:</span> +251923685549/+251935834561
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3071.2910802067827!2d90.45905169331171!3d23.691532202989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd"
            width="600"
            height="470"
            style={{ border: "0", width: "100%" }}
            allowfullscreen=""
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
