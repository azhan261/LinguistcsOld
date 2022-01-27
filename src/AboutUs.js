import React from 'react'

function AboutUs() {
    return (
        <div>
             <section className="s-space-layout1 bg-accent">
          <div className="container">
            <div className="row">
              <div className="inner-title-dark col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div className="section">
                  <h2 style={{textAlign: 'center'}}>About Us</h2>
                  <h2 style={{textAlign: 'center'}}>Why Linguistics? <br /><small> The Platform</small></h2>
                  <p className="text">
                    Linguistics was founded in 2020 with the aim of providing students with a different approach to learning English. All our material is authentically designed by our native teachers from Britain (England, Scotland, Wales and Norther Ireland), The Republic of Ireland, USA, Canada, South Africa, Australia and New Zealand, in order to give students an in-depth, intense and broad experience of the English language. In addition to the self-study material on the platform, our dedicated teaching team is on hand to help you every step of the way. 
                    Our platform incorporates the four main areas of language: reading, writing, speaking and listening, with grammar, vocabulary and pronunciation woven into these main skills. Linguistics follows the Common European Framework (CEFR) levels from A1-C2. 
                  </p>
                </div>
                <div className="section">
                  <h2 style={{textAlign: 'center'}}><small> Benefits for students </small></h2>
                  <p className="text">
                    It is widely known that students who study languages also improve their personal, professional and educational confidence immensely. By studying another language, young learners will be able to understand their main curriculum more easily and in a conceptual way, rather than the rote learning methodology that they are accustomed to at the moment. It will enable them to think creatively and independently to solve different issues they may face whilst studying any subject.   
                  </p>
                  <p className="text">
                    As we all know, English is the international language of business, therefore any student entering an interview in the future with a high competency level of the language is more likely to succeed ahead of other candidates, plus, having this knowledge and skills, in addition to an internationally recognised certification, will help them with their immigration applications, should they wish to work or study in a different country, as well as give them a head start over other candidates during an interview.    
                  </p>
                  <p className="text">
                    Linguistics’ main aim is to bridge the gap between the knowledge that students currently have and are learning through their current schooling curriculum in relation to the English language and becoming a proficient and confident user of English, to aid them to excel in their potential. 
                  </p>
                </div>
                <div className="section">
                  <h2 style={{textAlign: 'center'}}><small>Benefits for parents </small></h2>
                  <p className="text">
                    As a parent, the greatest gift we can give our children is education. As the proverbial expression says, “Give a man a fish and he can eat for a day, teach a man to fish and he can eat for a lifetime.” Through our methodology, we aim to give our students a different concept to English learning, where they can learn the skills to apply their knowledge of the language in any situation. Parents will also be able to log onto the platform to see their child’s progress, enabling them to see the economically friendly investment that they will be making to their child’s future. 
                  </p>
                </div>
                <div className="section">
                  <h2 style={{textAlign: 'center'}}><small>Benefits for companies</small></h2>
                  <p className="text">
                    As we all know, English is the international language of business. Having employees who are competent in English will allow your business 
                    to excel in national and international markets
                    as well as contributing to their continual professional development and allowing them to become more creative in their ways of thinking. 
                  </p>
                  <p className="text">
                    Employees who are able to speak another language can add huge value to your company in many ways, for example, adding cultural sensitivity to the team, attracting new business nationally or internationally, allowing them to speak to customers in a common language to improve your customer relations or by solely boosting the employees brain functionality and self-confidence by allowing them to continue learning, even whilst working full-time. 
                  </p>
                  <p className="text">
                    If you are a business, different packages are on offer for your team. Get in touch with us today to discover how we can provide you with a tailor-made training course for your employees.
                  </p>
                </div>
                <div className="section">
                  <h2 style={{textAlign: 'center'}}><small>Benefits for schools</small></h2>
                  <p className="text">
                    One of the many benefits of implementing this platform within your school is that your students will be able to gain more confidence, not only using English, but also in their school, college and university education, future workplaces and, especially, if they are looking to go abroad, with the course ultimately helping them with their immigration status, through the certification that they can obtain. Schools will also have access to in-depth statistics related to their students, in order to track their progress thoroughly. Through these multiple sources of support – Linguistics’ teachers, school and parents – we are positive that the students will make a huge leap in their English learning. 
                  </p>
                  <p className="text">
                    In addition to improving the level of all students, Linguistics is also dedicated to the Continual Professional Development of teaching personnel. Teachers of schools who are affiliated with Lingustics will be able to access the learning content and classes free-of-charge. Lifelong learning is essential within every profession and with teaching staff also increasing and refining their knowledge, this will only have further benefits on the students and for your school(s) in general. 
                  </p>
                </div>
                <div className="section">
                  <h2 style={{textAlign: 'center'}}><small>Internationally Recognised Certification </small></h2>
                  <p className="text">
                    Many students nowadays are required to demonstrate their level through a certification. In English, many different certificates are available, whether it be for a job interview or an immigration application. 
                  </p>
                  <p className="text">
                    Our team are experienced in the preparation of many different exams, as well as specialised examinations. If you are interested in taking an English-proficiency exam, take a look at what is on offer on our exam preparation page. If you don’t see the specific exam that you are looking to take, get in touch with us and we will help you reach your goals of getting certified. 
                  </p>
                </div>
              </div>
              <div className="img-width-100 col-lg-5 col-md-5 col-sm-12 col-xs-12 item-mb"> 
              <img src={`${process.env.PUBLIC_URL}/assets/upload/6d46fc58499cb374d28a2e290d22e082.png`}  className="josh" alt="about" />
              <div classNameName="text">
              <p>Hi! I am Josh and I’ve been an English teacher since 2014 in Spain and teaching students online.

                I have experience in teaching many different students from many different backgrounds and nationalities, including children starting from 3 years old to adults, from beginner level to advance and from general English to Business English and even English for the Military. I believe that learning a language should be fun and personalised to you, otherwise it makes the learning process a lot more difficult.

                I am from Southampton in the UK, but I love to travel. One fun fact is that every year, for New Year’s Eve, I travel to a different country to experience how they celebrate. I love meeting new people and learning about their culture, language and the way that they live in their community.</p>
              </div>
              </div>
            </div>
          </div>
       
          
        </section>
        {/* Blog Area Start Here */}
        <section className="s-space-bottom30">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="media mb-30">
                  {/*?php  $logo_image1 = (!empty($aboutData['logo_image1']) ? $aboutData['logo_image1'] : ''); ?*/}
                  <div className="media-body text-center"> <i className="about-icon logo-size-s">
                      <img src={`${process.env.PUBLIC_URL}/assets/logos/emblem-logos-04.png`} alt="" height="150px" width="150px" />

                    </i>
                    <h3 className="service-title-dark">Increased  <br />Confidence</h3>
                    <p>Our courses will help you feel much more confident about using English with an increase in skills, knowledge and fluency when needing to communicate. Leave the worry of not being understood behind and focus on the goal you are trying to reach.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="media mb-30">
                  {/*?php  $logo_image2 = (!empty($aboutData['logo_image2']) ? $aboutData['logo_image2'] : ''); ?*/}
                  <div className="media-body text-center"> <i className="about-icon logo-size-s">
                      <img src={`${process.env.PUBLIC_URL}/assets/logos/emblem-logos-02.png`} alt="" height="150px" width="150px" />
                    </i>
                    <h3 className="service-title-dark">Internationally Recognised</h3>
                    <p>With the option of taking an internationally recognised certification, you will open many doors for the future, whether you want to study or work abroad, or show your level to your employers and get a head start over the competition.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="media mb-30">
                  {/*?php  $logo_image3 = (!empty($aboutData['logo_image3']) ? $aboutData['logo_image3'] : ''); ?*/}
                  <div className="media-body text-center"> <i className="about-icon logo-size-s">
                      <img src={`${process.env.PUBLIC_URL}/assets/logos/emblem-logos-01.png`} alt="" height="150px" width="150px" />
                    </i>
                    <h3 className="service-title-dark">Increased Opportunities</h3>
                    <p>Whether you are looking for the job of your dreams, to work or study in international markets or to make your company more competitive, Linguistics will help you be able to communicate more fluently with potential employers, professors and clients.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="media mb-30">
                  {/*?php  $logo_image4 = (!empty($aboutData['logo_image4']) ? $aboutData['logo_image4'] : ''); ?*/}
                  <div className="media-body text-center"> <i className="about-icon logo-size-s">
                      <img src={`${process.env.PUBLIC_URL}/assets/logos/emblem-logos-03.png`} alt="" height="150px" width="150px" />
                    </i>
                    <h3 className="service-title-dark">Innovative Methodology</h3>
                    <p>No more memorising and let’s start using the language. Our methodology enables you to learn the language and to communicate in any situation needed. By the end of the course, you will have fully integrated the concepts so that it becomes a part of you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default AboutUs
