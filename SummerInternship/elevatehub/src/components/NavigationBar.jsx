import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { loginContext } from "../context/LoginContext";
// Import specific Bootstrap components if needed
import "bootstrap/js/dist/dropdown";

function NavigationBar() {
  let [currentUser, loginUser, logoutUser, LoginErr, UserLoginStatus, srole] =
    useContext(loginContext);
  console.log(srole);
  return (
    <div>
      <Navbar style={{ backgroundColor: " rgb(202, 145, 255)" }}>
        <Nav className="ms-auto p-3">
          <NavLink to="/:" className="fa nav-link btn m-2">
            <i className="fa fa-home fa-fw">Home</i>
          </NavLink>
          <NavLink to="/:/courses" className="fa nav-link btn m-2">
            <i className="fa fa-graduation-cap fa-fw">COURSES</i>
          </NavLink>
          <NavLink to="/:/compete" className="fa nav-link btn m-2">
            <i className="fa fa-flag fa-fw"></i>
            COMPETE
          </NavLink>
          <NavLink to="/:/mentorship" className="fa nav-link btn m-2">
            <i className="fa fa-bolt fa-fw">MENTORSHIP</i>
          </NavLink>
          <NavLink to="/:/community" className="fa nav-link btn m-2">
            <i className="fa fa-users fa-fw">COMMUNITY</i>
          </NavLink>
         
          {UserLoginStatus && (
            <div>
              {srole === "student" && (
                <NavDropdown title="Student" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">{currentUser}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavLink
                    to="/"
                    className="fa nav-link btn m-2"
                    onClick={logoutUser}
                  >
                    <i className="fa fa-download fa-fw">LOGOUT</i>
                  </NavLink>
                </NavDropdown>
              )}

              {srole === "admin" && (
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">{currentUser}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavLink to="/:/CreateCompete" className="fa nav-link btn m-2" >
                  <i className="fa fa-download fa-fw">Create Compete</i>
                </NavLink>
                <NavLink to="/:/CreateCourses" className="fa nav-link btn m-2" >
                  <i className="fa fa-download fa-fw">Create Courses</i>
                </NavLink>
                <NavLink to="/:/MentorsTable" className="fa nav-link btn m-2" >
                  <i className="fa fa-download fa-fw">Mentors Table</i>
                </NavLink>
                <NavLink to="/" className="fa nav-link btn m-2" onClick={logoutUser}>
                  <i className="fa fa-download fa-fw"> ADMIN LOGOUT</i>
                </NavLink>
              </NavDropdown>
              )}

              {srole === "mentors" && (
               <NavDropdown title="Mentor" id="basic-nav-dropdown">
               <NavDropdown.Item href="#">{currentUser}</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavLink to="/:/PostMentors" className="fa nav-link btn m-2" >
                  <i className="fa fa-download fa-fw">Post Mentors</i>
                </NavLink>
               <NavLink to="/" className="fa nav-link btn m-2" onClick={logoutUser}>
                 <i className="fa fa-download fa-fw">MENTOR LOGOUT</i>
               </NavLink>
             </NavDropdown>
              )}
            </div>
          )}

          <NavLink to="/SIgnup" className="fa nav-link btn m-2" onClick={logoutUser}>
            <i className="fa fa-user-plus fa-fw">SIGNUP</i>
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
