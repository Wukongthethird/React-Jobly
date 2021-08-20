import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
// import { useHistory } from "react-router-dom";


function ProfileForm() {
  // let history = useHistory()
  
  const { currentUser, updateProfile } = useContext(UserContext);


  const [profileInfo, setProfileInfo] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password:""
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
    updateProfile(profileInfo)
    // if(currentUser) history.push("/companies")
  }
  //add password field and labels
  return (
    <div className="ProfileForm" style={{ padding: "8px" }}>
      <form className="Profile-page" onSubmit={handleSubmit}>
        <h3>username</h3>
        <h4>{currentUser.username}</h4>
        <input
          style={{ width: "400px" }}
          id="Profile-first-name"
          name="firstName"
          className="form-control"
          onChange={handleChange}
          value={profileInfo.firstName}
        />
        <input
          style={{ width: "400px" }}
          id="Profile-last-name"
          name="lastName"
          className="form-control"
          onChange={handleChange}
          value={profileInfo.lastName}
        />
        <input
          style={{ width: "400px" }}
          id="Profile-email"
          name="email"
          className="form-control"
          onChange={handleChange}
          value={profileInfo.email}
        />
        <input
          style={{ width: "400px" }}
          id="Profile-password"
          name="password"
          className="form-control"
          type="password"
          onChange={handleChange}
          value={profileInfo.password}
        />
        <button>Update</button>
      </form>
    </div>
  );
}

export default ProfileForm;
