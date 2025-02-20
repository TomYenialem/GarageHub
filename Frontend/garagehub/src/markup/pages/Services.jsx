import React from 'react'
import img11 from "../../assets/images/images/gallery/11.jpg";
import img15 from "../../assets/images/images/gallery/15.jpg";

function Services() {
  return (
 <div class="page-wrapper">

    
    <section class="page-title" 
    style={{ backgroundImage: `url(${img11})` }}
    >
        <div class="auto-container">
            <h2>Services</h2>
            <ul class="page-breadcrumb">
                <li><a href="index.html">home</a></li>
                <li>Services</li>
            </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
    </section>


    <section class="services-section style-three">
        <div class="auto-container">
            <div class="sec-title style-two">
                <h2>Services that we offer</h2>
                <div class="text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </div>
            </div>
            <div class="row">
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Performance Upgrade</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-power"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Transmission Services</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-gearbox"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Break Repair & Service</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-brake-disc"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Engine Service & Repair</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-car-engine"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Tyre & Wheels</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-tire"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Denting & Painting</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-spray-gun"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>Air Conditioning Evac</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-air-conditioning"></span></div>
                    </div>
                </div>
                <div class="col-lg-4 service-block-one">
                    <div class="inner-box hvr-float-shadow">
                        <h5>Service and Repairs</h5>
                        <h2>General Service & Washing</h2>
                        {/* <a href="service-details.html" class="read-more">read more  +</a> */}
                        <div class="icon"><span class="flaticon-car-service"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="video-section mb-5">
        <div data-parallax='{"y": 50}' class="sec-bg" 
        
       style={{backgroundImage:`url(${img15})`}}
        ></div>
        <div class="auto-container">
            <h5>Working since 1992</h5>
            <h2>We are leader <br/> in Car Mechanical Work</h2>
            <div class="video-box">
                <div class="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="overlay-link lightbox-image video-fancybox ripple"><i class="flaticon-play"></i></a></div>
                <div class="text">Watch intro video <br/> about us</div>
            </div>
        </div>
    </section>


  
	
</div>
  )
}

export default Services;

