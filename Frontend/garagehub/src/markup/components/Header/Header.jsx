import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import loginService from "../../../services/login.service";
import { useAuth } from "../../../Context/AuthContext";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

function Header(props) {
  const { isLogged, setIsLogged, employee } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logOut = () => {
    loginService.logOut();
    setIsLogged(false);
  };

  const chekAdmin = () => {
    if (isLogged) {
      navigate("/admin");
    } else {
      toast.error("You are not authorized for the admin panel");
      navigate("/login");
    }
  };

 

  return (
    <div>
      <header className="main-header header-style-one">
        <div className="header-top text-white py-2">
          <div className="auto-container">
            <div className="inner-header items-center">
              <div className="left-column flex gap-4">
                <div className="text text-sm">
                  "Fast, Reliable, and Affordable Car Repairs!"
                </div>
                <div className="office-hour text-sm">
                  Mon - Sat: <strong>7:00 AM - 6:00 PM</strong>
                </div>
              </div>

              <div className="right-column">
                {isLogged ? (
                  <div className="link-btn">
                    <div className="phone-number text-sm">
                      <strong>Welcome, {employee?.employee_first_name}!</strong>
                    </div>
                  </div>
                ) : (
                  <div className="phone-number text-sm">
                    Need Assistance? Call Us: <p>+251 923685549</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <Link to={"/"}>
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  <div
                    className="mobile-nav-toggler"
                    // onClick={toggleMobileMenu}
                  >
                    <img src="assets/images/icons/icon-bar.png" alt="Menu" />
                  </div>
                  <nav
                    className={`main-menu navbar-expand-md navbar-light ${
                      isMobileMenuOpen ? "open" : ""
                    }`}
                  >
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link to={"/about"}>About Us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to={"/service"}>Services</Link>
                        </li>
                        <li>
                          <Link to={"/contact"}>Contact Us</Link>
                        </li>
                        <li onClick={chekAdmin}>
                          <Link>Admin</Link>
                        </li>
                        <li>
                          <Link to={'/customer_info'}>Orders</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="search-btn"></div>
                {isLogged ? (
                  <div className="link-btn">
                    <Link
                      to="/"
                      className="theme-btn btn-style-one blue"
                      onClick={logOut}
                    >
                      Log out
                    </Link>
                  </div>
                ) : (
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo-box">
                  <div className="logo">
                    <a href="/">
                      <img src="assets/images/custom/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="right-column">
                  <div className="nav-outer">
                    <div
                      className="mobile-nav-toggler"
                      // onClick={toggleMobileMenu}
                    >
                      <GiHamburgerMenu />
                      <h1>hello</h1>
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div className="search-btn"></div>
                  <div className="link-btn">
                    <a href="/login" className="theme-btn btn-style-one">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-remove"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="assets/images/logo-two.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer">
              <ul className="navigation">
                <li className="dropdown">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="dropdown">
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li className="dropdown">
                  <Link to={"/service"}>Services</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li
                  onClick={() => {
                    chekAdmin();
                    toggleMobileMenu();
                  }}
                >
                  <Link>Admin</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
    </div>
    // <header class="main-header header-style-one">
    //   <div class="header-top">
    //     <div class="auto-container">
    //       <div class="inner-container">
    //         <div class="left-column">
    //           <div class="text">
    //             # 1 Multibrand Car Workshop of Losangle City
    //           </div>
    //           <div class="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
    //         </div>
    //         <div class="right-column">
    //           <div class="phone-number">
    //             Schedule Your Appontment Today : <strong>1800 456 7890</strong>
    //           </div>
    //           <div class="language-switcher">
    //             <div id="polyglotLanguageSwitcher" class="">
    //               <form action="#">
    //                 <select id="polyglot-language-options">
    //                   <option id="en" value="en" selected>
    //                     English
    //                   </option>
    //                   <option id="fr" value="fr">
    //                     French
    //                   </option>
    //                   <option id="de" value="de">
    //                     German
    //                   </option>
    //                   <option id="it" value="it">
    //                     Italian
    //                   </option>
    //                   <option id="es" value="es">
    //                     Spanish
    //                   </option>
    //                 </select>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="header-upper">
    //     <div class="auto-container">
    //       <div class="inner-container">
    //         <div class="logo-box">
    //           <div class="logo">
    //             <a href="index.html">
    //               <img src="assets/images/logo.png" alt="" />
    //             </a>
    //           </div>
    //         </div>
    //         <div class="right-column">
    //           <div class="nav-outer">
    //             <div class="mobile-nav-toggler">
    //               <img src="assets/images/icons/icon-bar.png" alt="" />
    //             </div>

    //             <nav class="main-menu navbar-expand-md navbar-light">
    //               <div
    //                 class="collapse navbar-collapse show clearfix"
    //                 id="navbarSupportedContent"
    //               >
    //                 <ul class="navigation">
    //                   <li class="dropdown">
    //                     <a href="index.html">Home</a>
    //                     <ul>
    //                       <li>
    //                         <a href="index.html">Home Page 1</a>
    //                       </li>
    //                       <li>
    //                         <a href="index-2.html">Home Page 2</a>
    //                       </li>
    //                       <li>
    //                         <a href="index-3.html">Home Page 3</a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li class="dropdown">
    //                     <a href="about.html">About Us</a>
    //                     <ul>
    //                       <li>
    //                         <a href="about.html">About Us</a>
    //                       </li>
    //                       <li>
    //                         <a href="history.html">Company History</a>
    //                       </li>
    //                       <li>
    //                         <a href="team.html">Our Team</a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li class="dropdown">
    //                     <a href="service-1.html">Services</a>
    //                     <ul>
    //                       <li>
    //                         <a href="service-1.html">Services 1</a>
    //                       </li>
    //                       <li>
    //                         <a href="service-2.html">Services 2</a>
    //                       </li>
    //                       <li>
    //                         <a href="service-details.html">Single Service</a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li class="dropdown">
    //                     <a href="gallery-1.html">Gallery</a>
    //                     <ul>
    //                       <li>
    //                         <a href="gallery-1.html">Gallery 1</a>
    //                       </li>
    //                       <li>
    //                         <a href="gallery-2.html">Gallery 2</a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li class="dropdown">
    //                     <a href="blog.html">Pages</a>
    //                     <ul>
    //                       <li>
    //                         <a href="projects.html">Projects</a>
    //                       </li>
    //                       <li>
    //                         <a href="project-details.html">Project Details</a>
    //                       </li>
    //                       <li>
    //                         <a href="testimonials.html">Testimonials</a>
    //                       </li>
    //                       <li>
    //                         <a href="faq.html">Faq</a>
    //                       </li>
    //                       <li>
    //                         <a href="error.html">404 Error Page</a>
    //                       </li>
    //                       <li>
    //                         <a href="comming-soon.html">Coming Soon Page</a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li class="dropdown">
    //                     <a href="#">News</a>
    //                     <ul>
    //                       <li>
    //                         <a href="blog.html">Blog With Side bar</a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-2.html">Blog 2 Column</a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-details.html">Blog Details</a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     <a href="contact.html">Contact Us</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </nav>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="sticky-header">
    //     <div class="header-upper">
    //       <div class="auto-container">
    //         <div class="inner-container">
    //           <div class="logo-box">
    //             <div class="logo">
    //               <a href="index.html">
    //                 <img src={logo} alt="" />
    //               </a>
    //             </div>
    //           </div>
    //           <div class="right-column">
    //             <div class="nav-outer">
    //               <div class="mobile-nav-toggler">
    //                 <img src="assets/images/icons/icon-bar.png" alt="" />
    //               </div>

    //               <nav class="main-menu navbar-expand-md navbar-light"></nav>
    //             </div>
    //             <div class="search-btn">
    //               <button type="button" class="theme-btn search-toggler">
    //                 <span class="stroke-gap-icon icon-Search"></span>
    //               </button>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="mobile-menu">
    //     <div class="menu-backdrop"></div>
    //     <div class="close-btn">
    //       <span class="icon flaticon-remove"></span>
    //     </div>

    //     <nav class="menu-box">
    //       <div class="nav-logo">
    //         <a href="index.html">
    //           <img src="assets/images/logo-two.png" alt="" title="" />
    //         </a>
    //       </div>
    //       <div class="menu-outer"></div>

    //       <div class="social-links">
    //         <ul class="clearfix">
    //           <li>
    //             <a href="#">
    //               <span class="fab fa-twitter"></span>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               <span class="fab fa-facebook-square"></span>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               <span class="fab fa-pinterest-p"></span>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               <span class="fab fa-instagram"></span>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#">
    //               <span class="fab fa-youtube"></span>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>

    //   <div class="nav-overlay">
    //     <div class="cursor"></div>
    //     <div class="cursor-follower"></div>
    //   </div>
    // </header>
  );
}
  
      
export default Header;
