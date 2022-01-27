import React from 'react'
import { Link } from 'react-router-dom'

function CourseDetailJunior() {
    return (
        <div>
            

      <section id="header-bootom">
        {/* about us section */}
        <section id="about-us">
          <div className="container">
            <div className="title text-center">
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="about-img">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/course-images/junior.jpeg`} className="img-responsive img-thumbnail " />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="about-text">
                  <h2>Junior Courses</h2>
                  <p>Our Junior course is designed for young learners. It will enable them to have an introduction to English, enjoying the language and building their confidence, giving them a solid base ready to start their learning journey. This course incorporates a mix of fun activities and conversation classes, all with native English-speaking teachers, to ensure students receive a range of true English accents.</p>
                  <Link className="btn btn-dark" to="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services */}
        <section id="services-section">
          <div className="container pt-3">
            <div className="row">
            <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} >
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£9.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£14.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£29.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£59.95 per month</h6>
                                </div>
                        </Link>
                        </div>
            </div>
          </div>
        </section>
      </section>

        </div>
    )
}

export default CourseDetailJunior
