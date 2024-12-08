import react from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Landing/Home";
import Login from "./Landing/Auth/login";
import SignUp from "./Landing/Auth/signup";
import ForgetPassword from "./Landing/Auth/forgetPassword";
import Otp from "./Landing/Auth/otp";
import ResetPassword from "./Landing/Auth/reset-password";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
