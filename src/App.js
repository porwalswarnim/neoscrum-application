import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import RegistrationPage from "../src/components/registration/RegistrationPage";
import LoginPage from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login"></Link>
        <Link to="/registration"></Link>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/registration" component={RegistrationPage} />
        {/* <button onClick={() => history.push('/registration')}>
      Click me
    </button> */}
        {/* <RegistrationPage /> */}
      </div>
    </Router>
  );
}

export default App;
