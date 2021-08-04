import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
const LoginPage = (props) => {
  const [loginEmail, setLoginEmail] = useState("");

  const history = useHistory();

  const submitFormHandler = (e) => {
    e.preventDefault();
    
    console.log("e", e);
    console.log("loginEmail", loginEmail);
  };
  
  return (
    <form onSubmit={submitFormHandler} className="loginForm">
      <h1>LOGIN</h1>
      <input
        type="email"
        value={loginEmail}
        className="loginEmailbox"
        placeholder="Email *"
        onChange={(e) => setLoginEmail(e.target.value)}
      ></input>
      <hr />
      <input
        type="password"
        className="passwordlogin"
        placeholder="Password *"
      ></input>
      <hr />
      <br />

      <button className="btn-primary" type="submit" value="Submit">
        Login
      </button>

      <button
        onClick={() => history.push("/registration")}
        style={{marginLeft:"20px"}}
        className="btn-primary"
        type="submit"
        value="Submit"
      >
        Register
      </button>
      
    </form>
    
  );
};

export default LoginPage;
