import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { useHistory } from "react-router-dom";

function ProfileForm() {
  // let history = useHistory()

  const { currentUser, updateProfile } = useContext(UserContext);

  const [profileInfo, setProfileInfo] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProfileInfo((profileData) => ({
      ...profileData,
      [name]: value,
    }));
  }
  // Sends search back to parent component
  function handleSubmit(evt) {
    evt.preventDefault();
    updateProfile(profileInfo);
    // if(currentUser) history.push("/companies")
  }
  //add password field and labels
  return (
    <div className="ProfileForm" style={{ padding: "8px" }}>
      <Card>
        <Card.Body>
          <form className="Profile-page" onSubmit={handleSubmit}>
            <h3>username</h3>
            <h4>{currentUser.username}</h4>
            <input
              id="Profile-first-name"
              name="firstName"
              className="form-control"
              onChange={handleChange}
              value={profileInfo.firstName}
            />
            <input
              id="Profile-last-name"
              name="lastName"
              className="form-control"
              onChange={handleChange}
              value={profileInfo.lastName}
            />
            <input
              id="Profile-email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={profileInfo.email}
            />
            <input
              id="Profile-password"
              name="password"
              className="form-control"
              type="password"
              onChange={handleChange}
              value={profileInfo.password}
            />
            <Button type="submit">Update</Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileForm;
