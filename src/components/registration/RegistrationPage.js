import React, { useState } from "react";
import "./RegistrationPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";



const RegistrationPage = (props) => {
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();


  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("e", e);
    console.log("email", email);
    console.log("employeeName", employeeName);
  };
  return (
    <form onSubmit={submitFormHandler} className="registrationForm">
      <h1>Enter New Developer</h1>
      <input
        type="text"
        className="employeeName"
        value={employeeName}
        placeholder="Employee Name *"
        onChange={(e) => setEmployeeName(e.target.value)}
      ></input>
      <hr />
      <br />
      <input
        type="email"
        value={email}
        className="emailbox"
        placeholder="Email *"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <hr />
      <input type="file" className="fileUpload" />
      <br />
      <button className="btn-primary"  type="submit" value="Submit">
        Submit
      </button>
      <hr />
      <button
        onClick={() => history.push("/login")}
        style={{marginLeft:"400px"}}
        className="btn-primary"
        type="submit"
        value="Submit"
      >
        Login
      </button>
    </form>
  );
};

export default RegistrationPage;
