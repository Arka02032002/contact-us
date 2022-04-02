import React from "react";
import "./Navbar.css";
import logo from "../logo.jpeg";

export default function Navbar() {
  return (
    <>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">
          <img src={logo} width="80px" height="80px" />
        </div>
        <div className="search_box">
          <input type="search" placeholder="Search here" />
          <span className="fa fa-search"></span>
        </div>
        <ol>
          <li>
            <a href="/">All VBooks</a>
          </li>
          <li>
            <a href="/">AllCourses</a>
          </li>
          <li>
            <a href="/">Enrolled Courses</a>
          </li>
          <li>
            <a href="/">My Profile</a>
          </li>
        </ol>
        <label htmlFor="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>
    </>
  );
}
