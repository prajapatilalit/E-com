import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
