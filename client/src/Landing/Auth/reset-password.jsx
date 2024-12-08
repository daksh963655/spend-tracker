import react from "react";
import Container from "react-bootstrap/Container";
import Header from "../../Component/navbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import facebook from "../logo/facebook.png";
import google from "../logo/iconGoogle.png";
export default function ResetPassword() {
  return (
    <>
      <div className="bg-welcome">
        <Header />
        <div className="container top-avatar login">
          <div className="d-flex justify-content-center align-items-center mt-4 flex-column gap-1">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="text-center fw-bold fs-1">Reset Password</h2>
                <p className="text-center mt-5 mb-4">
                  Please enter new password to reset password
                </p>
                <Form className="py-3">
                  <Form.Group
                    as={Row}
                    className="mb-3 "
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="5" className="px-lg-0">
                      Enter new Password
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="password"
                        placeholder="Enter new Password"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 "
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="5" className="px-lg-0">
                      Confirm new password
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="password"
                        placeholder="Confirm new password"
                      />
                    </Col>
                  </Form.Group>
                </Form>

                <div className="d-flex justify-content-center align-items-center py-1">
                  <Button
                    variant="contained"
                    color="success"
                    className="rounded-0 custom-green btn-main"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
            <span className="my-3">
              Go back to login page?{" "}
              <Link
                to="/login"
                className="highlighted-text text-decoration-none"
              >
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
