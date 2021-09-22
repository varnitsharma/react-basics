import React, { useState } from "react";
import "../css/style.css";
import image2 from ".././asset/logo.png";
import image1 from ".././asset/SignUpPageSliderImage.png";
import { validEmail, validPassword, validPhone } from "../js/regex";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

function Signup({ history }) {
  // State Storage for Data and Errors
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(true);

  const [brandName, setBrandName] = useState("");
  const [brandNameError, setBrandNameError] = useState(true);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(true);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(true);

  // Validation for Phone Number
  const validatePhoneNumber = (e) => {
    e.preventDefault();
    if (e.target.value !== "undefined") {
      if (!validPhone.test(e.target.value)) {
        setPhone(e.target.value);
        setPhoneError(true);
      } else if (e.target.value.length < 10) {
        setPhone(e.target.value);
        setPhoneError(true);
      } else if (e.target.value.length == 10) {
        setPhone(e.target.value);
        setPhoneError(false);
      } else {
        setPhoneError(false);
      }
    }
  };

  // Validation for Password
  const validatePassword = (e) => {
    if (e.target.value !== "undefined") {
      if (!validPassword.test(e.target.value)) {
        setPassword(e.target.value);
        setPasswordError(true);
      } else {
        setPassword(e.target.value);
        setPasswordError(false);
      }
    }
  };

  // Validation for Email
  const validateEmail = (e) => {
    if (e.target.value !== "undefined") {
      if (!validEmail.test(e.target.value)) {
        setEmail(e.target.value);
        setEmailError(true);
      } else {
        setEmail(e.target.value);
        setEmailError(false);
      }
    }
  };

  // Validation for Name
  const validateName = (e) => {
    if (e.target.value !== "undefined") {
      if (e.target.value.length <= 3) {
        setName(e.target.value);
        setNameError(true);
      } else {
        setName(e.target.value);
        setNameError(false);
      }
    }
  };

  // Update for Brandname
  const updateBrandName = (e) => {
    if (e.target.value !== "undefined") {
      setBrandName(e.target.value);
      setBrandNameError(false);
    }
  };

  // Check for data on API on submit for Signup
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nameError &&
      !passwordError &&
      !emailError &&
      !phoneError &&
      !brandNameError
    ) {
      const data = new FormData(e.target);

      setName(data.get("name"));
      setBrandName(data.get("brandName"));
      setPhone(data.get("mobile"));
      setEmail(data.get("email"));
      setPassword(data.get("password"));

      axios
        .post("http://api.impsguru.com/api/register", {
          MobileNumber: phone,
          Name: name,
          BrandName: brandName,
          Email: email,
          Password: password,
        })
        .then((response) => {
          history.push({ pathname: "/login" });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-6">
          <div className="banner-block">
            <img className="img-fluid" src={image1} alt="image_1" />
            <p class="text-center fw-bold fs-5">
              Get you payment setteled in minutes
            </p>
            <p class="text-center fs-9">
              Connect your bank card, and create accounts in the selected
              currency.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-sm-6">
          <div className="row p-3">
            <div className="col">
              <img
                className="img-fluid w-25 h-0 float-end"
                src={image2}
                alt="image_2"
              />
            </div>
          </div>

          <div className="row login-form">
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <h3>
                  <span className="fw-bold">Sign Up</span>
                </h3>
              </div>
              <div className="row mt-2 mb-4">
                <span>Enter the required details</span>
              </div>
              <FormGroup>
                <div className="row">
                  <div className="col">
                    <Label class="input-group">Name on PAN</Label>
                    <Input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      onChange={validateName}
                    />
                  </div>
                  <div className="col">
                    <Label className="input-group">Brand Name</Label>
                    <Input
                      className="input"
                      type="text"
                      name="brandName"
                      placeholder="Apple"
                      onChange={updateBrandName}
                    />
                  </div>
                </div>
              </FormGroup>
              <FormGroup>
                <Label className="mt-3">Phone</Label>
                <Input
                  className="input"
                  type="number"
                  name="mobile"
                  placeholder="eg.8888xxxx40"
                  onChange={validatePhoneNumber}
                />
              </FormGroup>

              <FormGroup>
                <Label className="mt-3 mb-1 ">Email</Label>
                <Input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  onChange={validateEmail}
                />
              </FormGroup>

              <FormGroup>
                <Label className="mt-4 mb-1 font-weight: bold">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="*********"
                  onChange={validatePassword}
                />
              </FormGroup>
              <div className="row">
                <Button type="submit" className="btn">
                  Sign up
                </Button>
                <Button
                  className="btns"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Back to Login
                </Button>
                {passwordError && <p>Password is invalid</p>}
                {phoneError && <p>Mobile no is invalid</p>}
                {nameError && <p>Name is invalid</p>}
                {emailError && <p>Email is invalid</p>}
                {brandNameError && <p>BrandName can't invalid</p>}
              </div>
            </Form>
          </div>
          <div className="row mt-5">
            <span className="text-center fs-6 term-condition">
              Terms &amp; Condition
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Signup);
