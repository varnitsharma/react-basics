import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./login/login";
import Signup from "./signup/signup";
import OtpPage from "./otpPage/otpPage";
import Dashboard from "./dashboard/dashboard";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/otp">
              <OtpPage />
            </Route>
            <Route exact path="/dash">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
