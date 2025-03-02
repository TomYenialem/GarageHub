import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import loginService from "../../../services/login.service";
import { useAuth } from "../../../Context/AuthContext";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  const { isLogged, setIsLogged, employee } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  const logOut = () => {
    loginService.logOut();
    setIsLogged(false);
  };

  const checkAdmin = () => {
    if (isLogged) {
      navigate("/admin");
    } else {
      toast.error("You are not authorized for the admin panel");
      navigate("/login");
    }
  };

  return (
    <header className="main-header header-style-one header-style-two">
      {/* Top Bar */}
      <div className="header-top text-dark py-2">
        <div className="auto-container header_cont">
          <div className="left-column ">
            <span className="text text-sm car-repair sm-w-75 ">
              "Fast, Reliable, and Affordable Car Repairs!"
            </span>
            <span className="office-hour text-sm call-us">
              Mon - Sat: <strong>7:00 AM - 6:00 PM</strong>
            </span>
          </div>
          <div className=" text-sm text-md">
            {isLogged ? (
              <span className="d-block d-md-inline text-white welcome">
                <strong>Welcome, {employee?.employee_first_name}!</strong>
              </span>
            ) : (
              <span className="text-sm text-white call-us">
                Need Assistance? Call Us: <strong>+251 923685549</strong>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="header-upper">
        <Container>
          <div className="d-flex justify-content-between align-items-center p-3">
            {/* Logo */}
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="menu-icon d-lg-none" onClick={toggleMobileMenu}>
              {showMenu ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
            </div>

            {/* Desktop Navigation */}
            <Navbar expand="lg" className="desktop-menu d-none d-lg-block">
              <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/service">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link onClick={checkAdmin}>Admin</Nav.Link>
                <Nav.Link as={Link} to="/customer_info">
                  Orders
                </Nav.Link>
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
              </Nav>
            </Navbar>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${showMenu ? "open" : ""}`}>
        <Nav className="d-flex flex-column align-items-center">
          <Nav.Link as={Link} to="/" onClick={toggleMobileMenu}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={toggleMobileMenu}>
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/service" onClick={toggleMobileMenu}>
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={toggleMobileMenu}>
            Contact Us
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              checkAdmin();
              toggleMobileMenu();
            }}
          >
            Admin
          </Nav.Link>
          <Nav.Link as={Link} to="/customer_info" onClick={toggleMobileMenu}>
            Orders
          </Nav.Link>
          {isLogged ? (
            <Link
              to="/"
              className="theme-btn btn-style-one blue mt-3"
              onClick={logOut}
            >
              Log out
            </Link>
          ) : (
            <Link to="/login" className="theme-btn btn-style-one mt-3">
              Login
            </Link>
          )}
        </Nav>
      </div>

      {/* Overlay for mobile menu */}
      {showMenu && (
        <div className="menu-overlay" onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
}

export default Header;