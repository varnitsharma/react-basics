import React, { useState } from "react";
import "../css/style.css";
import image1 from ".././asset/LoginPageSliderImage.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function OtpPage({ history }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-sm-12">
          <div className="banner-block">
            <img
              className="img-fluid"
              src={image1}
              style={{ width: "600px" }}
              alt="image_1"
            />
            <p className="text-center fw-bold fs-5">Success</p>
            <p className="text-center  fs-9">Welcome Aboad!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(OtpPage);
