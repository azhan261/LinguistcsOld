import React from 'react'
import { Link } from 'react-router-dom'
function CourseDetailGeneral() {
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
                  <img src={`${process.env.PUBLIC_URL}/assets/images/course-images/general-english.jpeg`} className="img-responsive img-thumbnail " />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="about-text">
                  <h2>General English</h2>
                  <p>
                  Our General English course is aimed at students aged 7 and above. It is widely known that students who study languages also improve their personal, educational and professional confidence immensely. Through this intensive English-course, students will immensely improve their knowledge and skills of the language and critical and imaginative thinking, which will help them to further improve their overall academic and professional performance. This course is made up of self-study exercises with continual support from native English-speaking teachers, plus conversation classes to further improve listening and speaking skills and opportunities to speak English with other like-minded international students. Study different age-related material, designed by our teachers, for you.
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
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
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
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£49.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£39.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£99.95 per month</h6>
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

export default CourseDetailGeneral
