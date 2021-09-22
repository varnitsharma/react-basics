import React, { useState } from "react";
import "../css/style.css";
import image1 from ".././asset/OtpVerificationPageSlider.png";
import image2 from ".././asset/logo.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function OtpPage({ history }) {
  // State Storage for Data and Errors
  const [otp, setOtp] = useState("123456");
  const [otpError, setOtpError] = useState(true);

  const [phone, setPhone] = useState("");
  const { phoneNumber } = history.location;

  console.log(phoneNumber);

  // Validation for OTP
  const validateOTP = (e) => {
    if (e.target.value !== "undefined") {
      if (e.target.value.length < 6) {
        setOtp(e.target.value);
        setOtpError(true);
      } else if (e.target.value.length == 6) {
        setOtp(e.target.value);
        setOtpError(false);
      } else {
        setOtpError(false);
      }
    }
  };

  // Check for data on API on submit for OTP
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpError) {
      const data = new FormData(e.target);

      //setPhone(data.get("phone"));
      setOtp(data.get("otp"));

      axios
        .post("http://api.impsguru.com/api/verifyOtp", {
          MobileNumber: phoneNumber,
          Otp: otp,
        })
        .then((response) => {
          history.push({ pathname: "/dash" });
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
            <p className="text-center fw-bold fs-5">
              Get you payment setteled in minutes
            </p>
            <p className="text-center  fs-9">
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

          <div className="row otp-form">
            <Form onSubmit={handleSubmit}>
              <h3>
                <span className="font-weight-bold">OTP Verification!</span>
              </h3>

              <span className="font-weight-bold">
                A 6 digit code has been sent to +91xxxxxxx02
              </span>

              <br />
              <FormGroup>
                <Input type="hidden" name="phone" value="9999442202" />
                <Label className="mt-5 mb-1 ">Enter Code</Label>
                <Input
                  className="input"
                  type="number"
                  name="otp"
                  onChange={validateOTP}
                  placeholder="******"
                ></Input>
              </FormGroup>
              <FormGroup>
                <div className="row">
                  <Button type="submit" className="btn">
                    Verify
                  </Button>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="row">
                  <Button
                    className="btns"
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    Back to Login
                  </Button>
                </div>
              </FormGroup>
              {otpError && <p>Please enter a valid OTP</p>}
            </Form>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(OtpPage);
