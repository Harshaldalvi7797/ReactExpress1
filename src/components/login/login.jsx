import React, { Component } from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  render() {
    return (
      <div className="container">
        <div id="login">
          <h3 className="text-center text-white pt-5">Login form</h3>
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-9">
                <div id="login-box" className="col-md-12">
                  <form
                    id="login-form"
                    className="form"
                    action=""
                    method="post"
                  >
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      {/* <label for="username" className="text-info">Username:</label><br/> */}
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="password" className="text-info">Password:</label><br/> */}
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br/> */}
                      <input
                        type="submit"
                        name="submit"
                        className="block"
                        value="submit"
                      />
                    </div>
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
