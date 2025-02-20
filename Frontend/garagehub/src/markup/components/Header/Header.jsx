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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
                    onClick={toggleMobileMenu}
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
                      onClick={toggleMobileMenu}
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
          <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
          <div className="close-btn" onClick={toggleMobileMenu}>
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
                  <Link to={"/"} onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to={"/about"} onClick={toggleMobileMenu}>
                    About Us
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to={"/service"} onClick={toggleMobileMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} onClick={toggleMobileMenu}>
                    Contact Us
                  </Link>
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
  );
}

export default Header;
