import React from "react";
import banner from '/banner.jpg'
import left from '/10001.jpg'
// import left from '../../../public/10001.jpg'
import right from '/10002.jpg'
import car from '/p1.jpg'


import icon3 from "../../assets/images/images/icons/icon-3.png";
import icon4 from "../../assets/images/images/icons/icon-4.png";
import icon5 from "../../assets/images/images/icons/icon-5.png";
import icon6 from "../../assets/images/images/icons/icon-6.png";
import icon7 from "../../assets/images/images/icons/icon-7.png";
import icon8 from "../../assets/images/images/icons/icon-8.png";
import icon9 from "../../assets/images/images/icons/icon-9.png";
import icon10 from "../../assets/images/images/icons/icon-10.png";

function Home() {
  return (
    <div className="page-wrapper">
      <section className="video-section">
        <div
          data-parallax='{"y": 50}'
          className="sec-bg"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="auto-container">
          <h5>Working since 1999</h5>
          <h2>
            Tuneup Your Car <br />
            to Next Level
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
              Watch intro video <br />
              about us
            </div>
          </div>
        </div>
      </section>
      <section class="about-section">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-5">
              <div class="image-box">
                <img src={left} alt="" />
                <img src={right} alt="" />
                <div class="year-experience" data-parallax='{"y": 30}'>
                  <strong>17</strong> years <br />
                  Experience
                </div>
              </div>
            </div>
            <div class="col-lg-7 pl-lg-5">
              <div class="sec-title">
                <h5>Welcome to Our workshop</h5>
                <h2>We have 24 years experience</h2>
                <div class="text">
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
                    immersion along the information highway will close the loop
                    on focusing.
                  </p>
                </div>
                <div class="link-btn mt-40">
                  <a
                    href="about.html"
                    class="theme-btn btn-style-one style-two"
                  >
                    <span>
                      About Us <i class="flaticon-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="services-section">
        <div class="auto-container">
          <div class="sec-title style-two">
            <h2>Our Featured Services</h2>
            <div class="text">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Performance Upgrade</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-power"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Transmission Services</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-gearbox"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Break Repair & Service</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-brake-disc"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Engine Service & Repair</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-car-engine"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Tyre & Wheels</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-tire"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 service-block-one">
              <div class="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Denting & Painting</h2>
                <a href="#" class="read-more">
                  read more +
                </a>
                <div class="icon">
                  <span class="flaticon-spray-gun"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="features-section">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-6">
              <div class="inner-container">
                <h2>
                  Quality Service And <br />
                  Customer Satisfaction !!
                </h2>
                <div class="text">
                  We utilize the most recent symptomatic gear to ensure your
                  vehicle is fixed or adjusted appropriately and in an opportune
                  manner. We are an individual from Professional Auto Service, a
                  first class execution arrange, where free assistance offices
                  share shared objectives of being world-class car
                  administration focuses.
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image">
                <img
                  src={car}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
       <section class="brand-logo mt-5  pt-2">
        <div class="auto-container">
            <div class="sec-title style-two text-center">
                <h2>We Work All Brands of Car</h2>
            </div>
            <div class="wrapper-box">
               
                <div class="image"><img src={icon3} alt=""/></div>
                <div class="image"><img src={icon4} alt=""/></div>
                <div class="image"><img src={icon5} alt=""/></div>
                <div class="image"><img src={icon6} alt=""/></div>
                <div class="image"><img src={icon7} alt=""/></div>
                <div class="image"><img src={icon8} alt=""/></div>
                  <div class="image"><img src={icon9} alt=""/></div>
                  <div class="image"><img src={icon10} alt=""/></div>
              
            </div>
        </div>
    </section>
      <section class="why-choose-us">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-6">
              <div class="sec-title style-two">
                <h2>Why Choose Us</h2>
                <div class="text">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation heading towards.
                </div>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-mechanic"></span>
                </div>
                <h4>Certified Expert Mechanics</h4>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-wrench"></span>
                </div>
                <h4>Fast And Quality Service</h4>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-price-tag-1"></span>
                </div>
                <h4>Best Prices in Town</h4>
              </div>
              <div class="icon-box">
                <div class="icon">
                  <span class="flaticon-trophy"></span>
                </div>
                <h4>Awarded Workshop</h4>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="sec-title style-two">
                <h2>Addtional Services</h2>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div class="image">
                    <img src="assets/images/resource/image-4.jpg" alt="" />
                  </div>
                </div>
                <div class="col-md-7">
                  <ul class="list">
                    <li>General Auto Repair & Maintenance</li>
                    <li>Transmission Repair & Replacement</li>
                    <li>Tire Repair and Replacement</li>
                    <li>State Emissions Inspection</li>
                    <li>Break Job / Break Services</li>
                    <li>Electrical Diagnostics</li>
                    <li>Fuel System Repairs</li>
                    <li>Starting and Charging Repair</li>
                    <li>Steering and Suspension Work</li>
                    <li>Emission Repair Facility</li>
                    <li>Wheel Alignment</li>
                    <li>Computer Diagaonstic Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

 

export default Home;
