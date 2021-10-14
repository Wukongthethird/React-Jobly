import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useHistory } from "react-router-dom";

function LoginForm() {
  // let history = useHistory()
  const { login } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginInfo((LoginData) => ({
      ...LoginData,
      [name]: value,
    }));
  }

  // Sends search back to parent component
  function handleSubmit(evt) {
    evt.preventDefault();
    login(loginInfo);
    // console.log(currentUser, "LOGIN FORM")
    // if(currentUser) history.push("/companies")
  }

  return (
    <div className="LoginForm col-md-6 offset-md-3 col-lg-4 offset-lg-4" style={{ padding: "8px" }}>
        <Card>
        <Card.Body>
     
      <form className="Login-page" onSubmit={handleSubmit}>
        <input
          id="Login-username"
          name="username"
          className="form-control"
          placeholder="Username"
          onChange={handleChange}
          value={loginInfo.username}
          required
        />
        <input
          id="Login-password"
          name="password"
          type="password" 
          className="form-control"
          placeholder="Password"
          onChange={handleChange}
          value={loginInfo.password}
          required
        />

        <Button className="LoginForm-button" variant="primary"  type="submit" >Log In</Button>
      </form>
      </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
