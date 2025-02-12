import React from 'react'

function About() {
  return (
    <div class="page-wrapper">
      <section
        class="page-title"
        // style="background-image:url(assets/images/background/bg-3.jpg)"
      >
        <div class="auto-container">
          <h2>About us</h2>
          <ul class="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>About us</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>
      <section class="about-section-three">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-7">
              <div class="content">
                <h2>
                  We are highly skilled mechanics <br /> for your car repair
                </h2>
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
                    immersion along the information heading towards a
                    streamlined cloud solution. User generated content in
                    real-time will have multiple.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="image">
                <img src="assets/images/resource/image-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="why-choose-us-two">
        <div class="auto-container">
          <div class="row no-gutters">
            <div class="col-xl-6 left-column">
              <div class="inner-container">
                <div class="sec-title style-two light">
                  <h2>Why Choose Us</h2>
                </div>
                <div class="icon-box">
                  <div class="icon">
                    <span class="flaticon-repair"></span>
                  </div>
                  <div>
                    <h4>Smart Technology</h4>
                    <div class="text">
                      Leverage agile frameworks to provide a robust synopsis for{" "}
                      <br /> high level overviews. Iterative approaches to
                      corporate strategy <br /> foster collaborative thinking to
                      further.
                    </div>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="icon">
                    <span class="flaticon-price-tag"></span>
                  </div>
                  <div>
                    <h4>Best & Reasonable Prices</h4>
                    <div class="text">
                      Leverage agile frameworks to provide a robust synopsis for{" "}
                      <br />
                      high level overviews. Iterative approaches to corporate
                      strategy <br />
                      foster collaborative thinking to further.
                    </div>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="icon">
                    <span class="flaticon-fast-time"></span>
                  </div>
                  <div>
                    <h4>Timely Delivery</h4>
                    <div class="text">
                      Leverage agile frameworks to provide a robust synopsis for{" "}
                      <br /> high level overviews. Iterative approaches to
                      corporate strategy <br />
                      foster collaborative thinking to further.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 right-column">
              <div class="image">
                <img src="assets/images/resource/image-9.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="video-section">
        <div
          data-parallax='{"y": 50}'
          class="sec-bg"
          //  style="background-image: url(assets/images/background/bg-1.jpg);"
        ></div>
        <div class="auto-container">
          <h5>Working since 1992</h5>
          <h2>
            We are leader <br /> in Car Mechanical Work
          </h2>
          <div class="video-box">
            <div class="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                class="overlay-link lightbox-image video-fancybox ripple"
              >
                <i class="flaticon-play"></i>
              </a>
            </div>
            <div class="text">
              Watch intro video <br /> about us
            </div>
          </div>
        </div>
      </section>
      <section class="facts-section">
        <div class="auto-container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <h2>
                <span>100%</span> Satisfaction <br /> Guarantee
              </h2>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-md-4">
                  <div class="facts-block">
                    <div class="icon">
                      <span class="flaticon-customer-service-1"></span>
                    </div>
                    <h4>Quality Support</h4>
                    <div class="text">
                      Our Repair Services offers quality help programs for any
                      vehicles that permit them to consistently.
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="facts-block">
                    <div class="icon">
                      <span class="flaticon-car-1"></span>
                    </div>
                    <h4>All Car Makes</h4>
                    <div class="text">
                      Our Repair Services offers quality help programs for any
                      vehicles that permit them to consistently.
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="facts-block">
                    <div class="icon">
                      <span class="flaticon-maintenance"></span>
                    </div>
                    <h4>Variety Services</h4>
                    <div class="text">
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