import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div>
            

      <footer style={{background: '#111'}}>
        <div className="container py-4">
          <div className="row py-5">
          <div className="col-md-4 col-sm-6 mb-3 mb-md-0">
              <h6 className="pt-2 text-white">Information</h6>
              <div className="d-flex flex-wrap" style={{ textDecoration: 'none',}}>
                <ul className="list-unstyled text-muted mb-0 mb-3 mr-4">
                <li>
                  {/* Navbar link*/}<Link  to="/contact" >Contact Us</Link>
                </li>
                <li >
                  {/* Navbar link*/}<Link  to="/aboutus" >About Us</Link>
                </li>
                <li>
                  {/* Navbar link*/}<Link  to="/policy" >Privacy Policy</Link>
                </li>
                <li>
                  {/* Navbar link*/}<Link  to="/terms" >Terms & Conditions</Link>
                </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3 mb-md-0">
              <h6 className="pt-2 text-white">Our Services</h6>
              <div className="d-flex flex-wrap">
                <ul className="list-unstyled text-muted mb-0 mb-3 mr-4">
                <li>
                  {/* Navbar link*/}<Link cto="/login" >Login</Link>
                </li>
                <li >
                  {/* Navbar link*/}<Link  to="/register" >Register</Link>
                </li>
                <li>
                  {/* Navbar link*/}<Link  to="/courses" >Our Courses</Link>
                </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3 mb-md-0">
              <h6 className="pt-2 text-white">Get in Touch</h6>
              <p className="text-muted">Linguistics One Limited
                71-75 Shelton Street
                Covent Garden
                London
                WC2H 9JQ Linguistics UK Landline
                00 44 20 3897 0721
                Email Us:
                signup@linguistics.one
              </p>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Footer
