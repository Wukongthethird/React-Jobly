import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "./UserContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//TODO renders out text while login or asks to login or signup if no currentuser
function HomePage() {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser)
  return (
    <div>
      {currentUser ?
        <div className="Homepage">
          <Container className="Homepage-container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <Row>
          <Col><h2>Jobly </h2></Col>
          <Col><h6>All the jobs in one, convenient place</h6></Col>
          <Col><h1>Welcome back to Jobly, {currentUser.firstName}!</h1></Col>
        </Row>
          </Container>
        </div>
        :
        <div className="Homepage">
        <Container className="Homepage-container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <Row>
            <Col><h1>Welcome to Jobly!</h1></Col>
          </Row>
          <Row>
            <Col>
              <Link className="Homepage-button btn btn-primary" 
                    to="/login">Log In</Link>
              <Link className="Homepage-button btn btn-primary" 
                    to="/signup">Sign Up</Link>
            </Col>
          </Row>
        </Container>
        </div>
  
      }
    </div>
  )
}

export default HomePage;