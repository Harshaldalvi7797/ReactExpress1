import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
function App() {
  return (

      <React.Fragment>
      <Header/>
      <Switch>
      <Route path="/" exact />
        <Route path="/login"  component={Login}/>

        <Route path="/signup"  component={Signup}/>

        {/* <Route path=""  component={}/> */}

      </Switch>

      </React.Fragment>

    
 

  );
}

export default App;
