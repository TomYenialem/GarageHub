import React from 'react'

import img2 from "../../assets/images/images/gallery/two.jpg";

import img4 from "../../assets/images/images/gallery/four.jpg";
import img6 from "../../assets/images/images/gallery/7.jpg";

import img9 from "../../assets/images/images/gallery/10.jpg";

function About() {
  return (
    <div className="page-wrapper">
      <section
        className="page-title"
        style={{
          backgroundImage:`url(${img6})`,
        }}
      >
        <div className="auto-container">
          <h2>About us</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>About us</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>
      <section className="about-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content">
                <h2>
                  We are highly skilled mechanics <br /> for your car repair
                </h2>
                <div className="text">
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information heading towards a
                    streamlined cloud solution. User generated content in
                    real-time will have multiple.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image">
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us-two">
        <div className="auto-container">
          <div className="row no-gutters">
            <div className="col-xl-6 left-column">
              <div className="inner-container">
                <div className="sec-title style-two light">
                  <h2>Why Choose Us</h2>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-repair"></span>
                  </div>
                  <div>
                    <h4>Smart Technology</h4>
                    <div className="text">
                      Leverage agile frameworks to provide a robust synopsis for{" "}
                      <br /> high level overviews. Iterative approaches to
                      corporate strategy <br /> foster collaborative thinking to
                      further.
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-price-tag"></span>
                  </div>
                  <div>
                    <h4>Best & Reasonable Prices</h4>
                    <div className="text">
                      Leverage agile frameworks to provide a robust synopsis for{" "}
                      <br />
                      high level overviews. Iterative approaches to corporate
                      strategy <br />
                      foster collaborative thinking to further.
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <span className="flaticon-fast-time"></span>
                  </div>
                  <div>
                    <h4>Timely Delivery</h4>
                    <div className="text">
                      Leverage agile frameworks to provide a robust synopsis for{" "}
                      <br /> high level overviews. Iterative approaches to
                      corporate strategy <br />
                      foster collaborative thinking to further.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 right-column">
              <div className="image">
              </div>
                <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="video-section  mt-5">
        <div
          data-parallax='{"y": 50}'
          className="sec-bg"
           style={{backgroundImage:`url(${img4})`}}
        ></div>
        <div className="auto-container">
          <h5>Working since 1992</h5>
          <h2>
            We are leader <br /> in Car Mechanical Work
          </h2>
          <div className="video-box">
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                className="overlay-link lightbox-image video-fancybox ripple"
              >
                <i className="flaticon-play"></i>
              </a>
            </div>
            <div className="text">
              Watch intro video <br /> about us
            </div>
          </div>
        </div>
      </section>
      <section className="facts-section ">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <h2>
                <span>100%</span> Satisfaction <br /> Guarantee
              </h2>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="facts-block">
                    <div className="icon">
                      <span className="flaticon-customer-service-1"></span>
                    </div>
                    <h4>Quality Support</h4>
                    <div className="text">
                      Our Repair Services offers quality help programs for any
                      vehicles that permit them to consistently.
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="facts-block">
                    <div className="icon">
                      <span className="flaticon-car-1"></span>
                    </div>
                    <h4>All Car Makes</h4>
                    <div className="text">
                      Our Repair Services offers quality help programs for any
                      vehicles that permit them to consistently.
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="facts-block">
                    <div className="icon">
                      <span className="flaticon-maintenance"></span>
                    </div>
                    <h4>Variety Services</h4>
                    <div className="text">
                      Our Repair Services offers quality help programs for any
                      vehicles that permit them to consistently.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About