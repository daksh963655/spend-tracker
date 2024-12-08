import react from "react";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-light-color z-1" sticky="top" >
        <Container fluid>
          <Link to="/" className="py-1 logo">
            <img src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5 d-flex flex-column flex-lg-row gap-4 gap-lg-3">
              <a href="#about">About Us</a>
              <a href="#team">Our Team</a>
              <a href="#">How we work</a>
              <a href="#">Features</a>
              <a href="#">Connect Your Bank</a>
              <a href="#">Pricing</a>
            </Nav>
            <Nav>
              <div className="d-flex flex-row gap-1">
                <Link to="/login">
                  <Button
                    variant="contained"
                    color="success"
                    className=" btn-main"
                    size="small"
                  >
                    Login
                  </Button>
                </Link>
                <hr className="h-100" />
                <Link to="/signup">
                  <Button
                    variant="contained"
                    color="success"
                    className=" btn-black"
                    size="small"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
