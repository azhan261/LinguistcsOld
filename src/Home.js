import React from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const settings2 = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
    return (
      
        <div className = "applicationFont" >
          {/* About us */}
        <section id="about-us pt-5">
        <div className="container mb-5">
          <div className="title text-center">
          </div>
          <div className="row">
            <div className="col-md-6 pt-4">
              <div className="about-img">
                <img src={`${process.env.PUBLIC_URL}/assets/images/meeting.jpg`} className="img-responsive img-thumbnail " />
              </div>
            </div>
            <div className="col-md-6 text-left"  >
              <h2>WHO <span style={{color: '#797979'}}>ARE WE?</span></h2>
              <p> 
                Linguistics is a language learning platform with the aim of helping you reach your goals and become a proficient English speaker. We all know the importance of English, whether it be for travelling, business or everyday communication, our specialised teachers can help you. Our teachers are specialised in general English and business English. Our teachers have extensive knowledge in every field of business, as well as many years of experience working with directors of multinational companies in order to improve their communicative skills, as well as presentations and written correspondences. As well as with business, our teachers are also experienced in young learners, general English and many different examinations.
                <br /> <br />
                Whatever your needs are, we are here to help!
              </p>
              <div className="about-btn">
                <Link className="btn btn-dark" to="/main/aboutus"> Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* services */}
      
      <section id="services-section">
        <div className="container">
          <div className="services-title text-center">
            <h2>Online <span style={{color: '#797979'}}> Courses</span></h2>
            <p>
              Linguistics aims to help every type of learner improve their English skills. We offer different types of courses, depending on your needs and age.
            </p>
          </div>
          <div className="row">
            <div className="col-md-2 col-xs-6 col-sm-6 wow fadeIn">
            <Link className="LinkColor" style={{ textDecoration: 'none',  }} to="/main/course-detail-schools">
              <div className="icon-wrapper">
              <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
              </div>
              <h4 className="mt-2">School's Training</h4>
              Click for more info
            </div>
            </Link>
            </div>
            <div className="col-md-2 col-xs-6 col-sm-6 wow fadeIn">
            <Link className="LinkColor" style={{ textDecoration: 'none',  }} to="/main/course-detail-junior">
              <div className="icon-wrapper">
              <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
              </div>
              <h4 className="mt-2">Junior Courses</h4>
              Click for more info
            </div>
            </Link>
            </div>
            <div className="col-md-2 col-xs-6 col-sm-6 wow fadeIn">
            <Link className="LinkColor" style={{ textDecoration: 'none',  }} to="/main/course-detail-general">
              <div className="icon-wrapper">
              <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
              </div>
              <h4 className="mt-2">General English</h4>
              Click for more info
            </div>
            </Link>
            </div>
            <div className="col-md-2 col-xs-6 col-sm-6 wow fadeIn">
            <Link className="LinkColor" style={{ textDecoration: 'none',  }} to="/main/course-detail-business">
              <div className="icon-wrapper">
              <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
              </div>
              <h4 className="mt-2">Buisness Courses</h4>
              Click for more info
            </div>
            </Link>
            </div>
            <div className="col-md-2 col-xs-6 col-sm-6 wow fadeIn">
            <Link className="LinkColor" style={{ textDecoration: 'none',  }} to="/main/course-detail-examination">
              <div className="icon-wrapper">
              <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
              </div>
              <h4 className="mt-2">Examination Preparation</h4>
              Click for more info
            </div>
            </Link>
            </div>
            <div className="col-md-2 col-xs-6 col-sm-6 wow fadeIn">
            <Link className="LinkColor" style={{ textDecoration: 'none',  }} to="/main/course-detail-special">
              <div className="icon-wrapper">
              <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
              </div>
              <h4 className="mt-2">Specialised Exams</h4>
              Click for more info
            </div>
            </Link>
            </div>
            <div className="col-md-2 offset-md-5 col-xs-6 col-sm-6 wow fadeIn">
            <Link className="LinkColor" style={{ textDecoration: 'none',  }} to="/main/course-detail-ielts">
              <div className="icon-wrapper">
              <div className="icon">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
              </div>
              <h4 className="mt-2">IELTS Preparation</h4>
              Click for more info
            </div>
            </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="records .homeIconWrapper">
      <div class="container mt-5">
        <div class="icons-wrapper">
          <div class="row justify-content-center">
            <div class="col-md-3 col-xs-6 col-sm-6 ">
              <div class="record-icon-wrapper">
                <div class="icon">
                  <i className="far fa-building fa-5x"></i>
                </div>
                <div class="numbers">
                  <h3>Established Since</h3>
                    <h2>2020</h2>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 col-sm-6">
              <div class="record-icon-wrapper">
                <div class="icon">
                  <i className="fas fa-globe fa-5x"></i>
                </div>
                <div class="numbers">
                  <h3>Countries Serving</h3>
                    <h2>190</h2>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 col-sm-6 ">
              <div class="record-icon-wrapper">
                <div class="icon">
                  <i className="fas fa-users fa-5x"></i>
                </div>
                <div class="numbers">
                  <h3>Professional Team</h3>
                    <h2>50+</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

            <section id="testimonials">
              
                    <div className="container">
                      <div className="blog-title text-center">
                        <small>Recent client's sayings</small>
                        <h1>OUR <span style={{color: '#101010'}}>Testimonials</span></h1>
                      </div>
                    <div className="row">
                      <div className="col-md-2" />
                      <div className="col-md-8">
                        <div className="testimonial-carousel">
                          <h3 style={{padding: 0}}><strong>Testimonials</strong></h3>
                          <div className="seprator" />
                          <Slider {...settings}>
                          <div>
                          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                            {/* Wrapper for slides */}
                            <div className="carousel-inner">
                              <div className="item active">
                                <div className="row" style={{padding: '20px'}}>
                                  <p className="testimonial_para"><i className="fa fa-quote-left testimonial_fa" aria-hidden="true" /><br />“Linguistics has really helped me to improve my level and confidence when speaking and using English. I feel a lot more confident now when attending business meetings and travelling for work.”</p><br />
                                  <div className="row">
                                    <div className="col-sm-2">
                                      <img src={`${process.env.PUBLIC_URL}/assets/user-images/user.png`} className="img-responsive" style={{width: '80px', borderRadius: '100px', height: '70px'}} />
                                    </div>
                                    <div className="col-sm-10 mr-5">
                                      <h4 style={{padding: 0}}><strong>María Pérez – Spain</strong></h4>
                                      <p className="testimonial_subtitle"><span>Business Course</span><br />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                              </div>
                            </div>
                              <div className="item">
                                <div className="row" style={{padding: '20px'}}>
                                  <p className="testimonial_para"><i className="fa fa-quote-left testimonial_fa" aria-hidden="true" /><br />“The structure is very flexible and allows me to practice all the parts of the language, from grammar to using it practically. I am really noticing my level improving in every aspect. Having a tutor is really helpful as I can ask any questions that I have at any time!!”</p><br />
                                  <div className="row">
                                    <div className="col-sm-2">
                                    <img src={`${process.env.PUBLIC_URL}/assets/user-images/user.png`} className="img-responsive" style={{width: '80px', borderRadius: '100px'}} />
                                    </div>
                                    <div className="col-sm-10 mr-5">
                                      <h4 style={{padding: 0}}><strong> Salman Raza -Pakistan</strong></h4>
                                      <p className="testimonial_subtitle"><span>General English</span><br />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            <div className="item">
                              <div className="row" style={{padding: '20px'}}>
                                <p className="testimonial_para"><i className="fa fa-quote-left testimonial_fa" aria-hidden="true" /><br />“I contracted some of classes to prepare for a job interview. I got some great advice and got the job!! I have now joined the whole programme to continue improving and am learning more and more practical vocabulary every day!!”</p><br />
                                <div className="row">
                                  <div className="col-sm-2">
                                  <img src={`${process.env.PUBLIC_URL}/assets/user-images/user.png`} className="img-responsive" style={{width: '80px', borderRadius: '100px'}} />
                                  </div>
                                  <div className="col-sm-10 mr-5">
                                    <h4 style={{padding: 0}}><strong> Usman - UAE</strong></h4>
                                    <p className="testimonial_subtitle"><span>One-to-One</span><br />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="row" style={{padding: '20px'}}>
                                <p className="testimonial_para"><i className="fa fa-quote-left testimonial_fa" aria-hidden="true" /><br />“My child has never been very interested in learning English. We had tried a lot of different styles from watching the television in English and have a private teacher coming to our house, but he still wasn’t liking it. We signed him up to the Junior Course and now he loves English! He doesn’t feel like he is learning, only enjoying the language and we can see a huge improvement in his confidence!”</p><br />
                                <div className="row">
                                  <div className="col-sm-2">
                                  <img src={`${process.env.PUBLIC_URL}/assets/user-images/user.png`} className="img-responsive" style={{width: '80px', borderRadius: '100px'}} />
                                  </div>
                                  <div className="col-sm-10 mr-5">
                                    <h4><strong> Saba - UAE</strong></h4>
                                    <p className="testimonial_subtitle"><span>Junior Course</span><br />
                                    </p>
                                  </div>
                                </div>
                          </div>
                          
                        </div>
                    </Slider>
                  </div>
                </div>
                <div className="col-md-2" />
              </div>
            </div>
          </section>
          <section id="blog" className="wow fadeIn">
        <div className="container">
          <div className="blog-title text-center">
            <small>Always Good News</small>
            <h1>OUR <span style={{color: '#101010'}}>BLOG POSTS</span></h1>
          </div>
          <div className="w3-content w3-display-container">
            <div className="w3-display-container mySlides">
              <img src="{{asset('assets/images/blogs-images/'.$blog->media_image)}}" style={{width: '100%', height: '400px'}} />
              <div className="w3-display-topright w3-large w3-container w3-padding-16 w3-white" style={{marginRight: '20px', marginTop: '20px'}}>
                <a href="{{url('blogs-detail/'.$blog->id)}}" style={{textDecoration: 'none'}}>
                  <div>
                    <h3 style={{color: 'black', fontSize: '20px', fontWeight: 'bold'}}>{'{'}{'{'}$blog-&gt;title{'}'}{'}'}</h3>
                    <p style={{fontSize: '17px'}}>{'{'}!!$blog-&gt;sub_title!!{'}'}</p>
                  </div>
                </a>
              </div>
            </div>
            <button className="w3-button w3-display-left w3-black" onclick="plusDivs(-1)">❮</button>
            <button className="w3-button w3-display-right w3-black" onclick="plusDivs(1)">❯</button>
          </div>
          {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">*/}
          {/*  */}
          {/*  */}
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <style dangerouslySetInnerHTML={{__html: "\n.mySlides {display:none;}\n" }} />
          {/* end slider */}
        </div>
      </section>

        </div>
    )
}

export default Home
