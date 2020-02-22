import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signin"  component={Signin}/> */}

        <Route path="/signup" component={Signup} />

        {/* <Route path=""  component={}/> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
