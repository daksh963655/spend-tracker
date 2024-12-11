import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Header from "../../Component/navbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { axiosInstance } from "../../Component/axiosInstance";
import facebook from "../logo/facebook.png";
import google from "../logo/iconGoogle.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !phone) {
      toast.error("All fields are required");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);

    const loadingToastId = toast.loading("Processing your request...");

    try {
      const res = await axiosInstance.post("user/register", {
        name,
        email,
        password,
        phone,
      });
      console.log(res);

      // Update loading toast to success
      toast.update(loadingToastId, {
        render: "User registered successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong. Please try again.";

      // Update loading toast to error
      toast.update(loadingToastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-signup">
        <Header />
        <div className="container top-avatar login">
          <div className="d-flex justify-content-center align-items-center mt-4 flex-column gap-1">
            <div className="card shadow mb-4">
              <div className="card-body">
                <h2 className="text-center fw-bold fs-1">Sign Up</h2>
                <p className="text-center">Let’s Get Started</p>
                <Form className="py-3" onSubmit={handleSignUp}>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    <Form.Label column sm="4">
                      Name
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
                    <Form.Label column sm="4">
                      Phone Number
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="text"
                        placeholder="Phone number"
                        value={phone}
                        maxLength={10}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                      Email Address
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                      Password
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <div className="d-flex justify-content-center align-items-center py-3">
                    <Button
                      variant="contained"
                      color="success"
                      className="rounded-0 custom-green btn-main"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing Up..." : "Signup"}
                    </Button>
                  </div>
                </Form>

                <span className="w-100 d-flex justify-content-center">
                  Go back to login page?{" "}
                  <Link
                    to="/signin"
                    className="highlighted-text text-decoration-none"
                  >
                    Signin
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
