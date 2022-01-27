import React from 'react'
import { Link } from 'react-router-dom'
function CourseDetailBusiness() {
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
                  <img src={`${process.env.PUBLIC_URL}/assets/images/course-images/business-course.jpeg`} className="img-responsive img-thumbnail " />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="about-text">
                  <h2>Business Courses</h2>
                  <p>
                  As we all know, English is the international language of business. From a company perspective, having employees who are proficient in English will enable you to be even more competitive on a national and international level. For employees, if you are currently working or looking for a change in your job, having a high level of English will make you stand out within your company and during an interview. This course will improve your language skills through topics which are focussed on the business world. As well as your personal tutor, you will also have classes with a specialised native English teacher in your field of speciality. If you are a business, contact us today for your tailor-made package.
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
                                <h5 className="mt-2">Business Courses</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£19.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Business Courses</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£79.95 per month</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} to="/main/registration">
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Business Courses</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
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
                                <h5 className="mt-2">Business Courses</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£119.95 per month</h6>
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

export default CourseDetailBusiness
