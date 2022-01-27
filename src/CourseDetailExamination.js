import React from 'react'
import { Link } from 'react-router-dom'
function CourseDetailExamination() {
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
                  <img src={`${process.env.PUBLIC_URL}/assets/images/course-images/exam-prep.jpeg`} className="img-responsive img-thumbnail " />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="about-text">
                  <h2>Examination Preparation</h2>
                  <p>
                  Nowadays, we all personally know our level of English and your teacher can help you understand where you are at, however many institutions are asking for certifications as proof of your competencies. The team at Linguistics are specialised in a range of different examinations, including IELTS, Cambridge, Oxford Test of English, LanguageCert, among many others. This course will not only improve your level of English, but also allow you to obtain some tips and tricks to succeed on the day of your exam.
                  </p>
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
            <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn ">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£17.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£75.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£45.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£115.95 per month</h6>
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

export default CourseDetailExamination
