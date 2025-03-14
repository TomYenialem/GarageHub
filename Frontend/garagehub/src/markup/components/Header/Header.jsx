import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import loginService from "../../../services/login.service";
import {toast} from 'react-hot-toast'

import iconBar from "../../../assets/images/banner/menu.png";
import logo from "../../../assets/images/logo.png";

function Header() {
  const { isLogged, setIsLogged, employee } = useAuth();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const navigate = useNavigate();

  // Logout function
  const logOut = () => {
    loginService.logout();
    setIsLogged(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuVisible(false);
  };

  // Admin route check
const checkAdmin = () => {
  if (!isLogged) {
    toast.error("Please login first");
    navigate("/login"); // Redirects to login page
  } else {
    navigate("/admin"); // Only navigates if logged in
  }
};

  const isAdmin = () => {
    closeMobileMenu();
    checkAdmin();
  };

  return (
    <header
      className={`main-header header-style-one fixed-top ${
        isMobileMenuVisible ? "mobile-menu-visible" : ""
      }`}
    >
      {/* 🔹 Top Header Section */}
      <div className="header-top px-5 py-2">
        <div className="auto-container">
          <div className="inner-container">
            <div className="left-column">
              <div className="text enjoy ">
                Driven by expertise, fueled by care
              </div>
              <div className="office-hour">
                Monday - Saturday 7:00AM - 6:00PM
              </div>
            </div>
            <div className="right-column">
              {isLogged ? (
                <div className="phone-number fw-bold ">
                  Welcome : {employee.employee_first_name}
                </div>
              ) : (
                <div className="phone-number ">
                  Schedule Your Appointment Today:{" "}
                  <strong>1800 456 7890</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="header-upper ">
        <div className="auto-container">
          <div className="inner-container logo_cont mb-5">
            {/* 🔹 Logo Section */}
            <div className="logo-box mb-4 ">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            {/* 🔹 Navigation & Buttons */}
            <div className="right-column ">
              <div className="nav-outer">
                {/* Mobile Menu Toggle */}
                <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                  <img src={iconBar} alt="Menu" width={"30px"} />
                </div>

                {/* Main Navigation */}
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation list_nav">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/service">Services</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link
                          to="/admin"
                          onClick={(e) => {
                            e.preventDefault(); // Prevents default link behavior
                            checkAdmin();
                          }}
                        >
                          Admin
                        </Link>
                      </li>
                      <li>
                        <Link to="/customer_info">Orders</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* 🔹 Login / Logout Button */}
              <div className="mb-2">
                {isLogged ? (
                  <Link
                    to="/"
                    className="theme-btn btn-style-one blue ms-3"
                    onClick={logOut}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link to="/login" className="theme-btn btn-style-one ms-3">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {isMobileMenuVisible && (
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={closeMobileMenu}></div>
          <div className="menu-box">
            <div className="close-btn" onClick={closeMobileMenu}>
              ✖
            </div>
            <nav className="menu-box">
              {/* 🔹 Mobile Logo */}
              <div className="nav-logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              {/* 🔹 Mobile Navigation */}
              <ul className="navigation">
                <li>
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMobileMenu}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/service" onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin"
                    onClick={(e) => {
                      e.preventDefault(); // Prevents default link behavior
                      isAdmin();
                    }}
                  >
                    Admin
                  </Link>
                </li>

                <li>
                  <Link to="/customer_info" onClick={closeMobileMenu}>
                    Orders
                  </Link>
                </li>
                {isLogged ? (
                  <li>
                    <Link
                      to="/"
                      className="theme-btn btn-style-one"
                      onClick={logOut}
                    >
                      Log Out
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="theme-btn btn-style-one text-light"
                    >
                      Log in
                    </Link>
                  </li>
                )}
              </ul>

              {/* 🔹 Social Links */}
              <div className="social-links">
                <ul>
                  <li>
                    <Link to="#">
                      <span className="fab fa-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-facebook-square"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-pinterest-p"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-instagram"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-youtube"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* 🔹 Overlay Cursor Effect */}
      <div className="nav-overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
    </header>
  );
}

export default Header;
