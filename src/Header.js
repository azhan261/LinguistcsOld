import React from 'react'
import {Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light  py-lg-2">
          <div className="container"><a className="navbar-brand d-flex align-items-left" href="/home"><img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} alt=""  /><span className="text-uppercase text-small font-weight-bold text-dark  mb-0"></span></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
         
                <li className="nav-item">
                  <Link className="nav-link" to="/" >Home</Link>
                </li>
         
                <li className="nav-item">
                  {/* Navbar link*/}<NavLink  className="nav-link" exact to="/main/aboutus" >About Us</NavLink>
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link className="nav-link" to="/main/course" >Courses</Link>
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link className="nav-link" to="/main/registration" >Register</Link>
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link className="nav-link" to="/main/teachers" >Become a Teacher</Link>
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link className="nav-link" to="/main/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link className="nav-link" to="/main/login-auth-student" >Login For Students</Link>
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link className="nav-link" to="/main/login-auth-teacher" >Login For Teachers</Link>
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link  className="nav-link" to="">Dashboard</Link >
                </li>
                <li className="nav-item">
                  {/* Navbar link*/}<Link className="nav-link" to="/main/placementtest" >Placement Test</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        </div>
    )
}

export default Header
