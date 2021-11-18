import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Password from "./Pages/Password";
import CreateAccount from "./Pages/CreateAccount";
import Tos from "./Pages/Tos";
import Privacy from "./Pages/Privacy";
function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Password /> */}
      {/* <CreateAccount /> */}
      {/* <Tos /> */}
      <Privacy />
    </div>
  );
}

export default App;
