import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useHistory } from "react-router-dom";

function SignUpForm() {
  // let history = useHistory()
  const { signup } = useContext(UserContext);
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignUpInfo((SignUpData) => ({
      ...SignUpData,
      [name]: value,
    }));
  }
  // Sends search back to parent component
  function handleSubmit(evt) {
    evt.preventDefault();
    signup(signUpInfo);
    // if(currentUser) history.push("/companies")
  }

  return (
    <div
      className="SignUpForm col-md-6 offset-md-3 col-lg-4 offset-lg-4"
      style={{ padding: "8px" }}
    >
      <Card>
        <Card.Body>
          <form className="Sign-up-page" onSubmit={handleSubmit}>
            <input
              id="Sign-up-username"
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={handleChange}
              value={signUpInfo.username}
            />
            <input
              id="Sign-up-password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              type="password" 
              value={signUpInfo.password}
            />
            <input
              id="Sign-up-first-name"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              onChange={handleChange}
              value={signUpInfo.firstName}
            />
            <input
              id="Sign-up-last-name"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              onChange={handleChange}
              value={signUpInfo.lastName}
            />
            <input
              id="Sign-up-email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              value={signUpInfo.email}
            />
            <Button className="SignupForm-button" type="submit">Log In</Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUpForm;
