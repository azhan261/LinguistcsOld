import React from 'react'
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";

function Course() {
    const history = useHistory()
    const handleOnClick = (data) => {
        if (data == "Schools Training Adult Training £19.75 per level" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Schools Training Junior Training £19.75 per level"){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Junior Courses Self study + 1 group class / month - £9.95"){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Junior Courses Self study + 1  group class / week - £14.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Junior Courses Self study + 1 one 1 - 1 class / month - £29.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Junior Courses Self study + one 1 - 1 class / week - £59.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "General English Self study + 1 group class / month - £14.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "General English Self study + 1 group class / week - £49.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "General English Self study + one 1 - 1 class / month - £39.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "General English Self study + one  1 - 1 class / week - £99.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Business Self study + 1 group class per month - £19.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Business Self study + 1 group class per week - £79.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Business Self study + one 1 - 1 class / month - £49.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Buisness Self study + one 1 - 1 class / week - £119.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Examination Preparation Self study + 1 group class / month - £17.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Examination Self study + 1 group class / week - £75.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Examination Self study + one 1 to 1 class / month - £45.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Examination Self study + one 1 to 1 class / week - £115.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "IELTS Self study + 22 group classes, 10 maximum students, / month - £213.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "IELTS Self study + 22 group classes, 6 maximum students, / month - £313.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Specialised Self study + 1 group class / month - £22.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Specialised Self study + 1 group class / week - £84.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Specialised Self study + one 1 to 1 class / week - £54.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        } else if (data == "Specialised Self study + one 1 to 1 class / month - £124.95" ){
            history.push({
                pathname: "/main/registration",
                state: data
            })
        }
    }
    return (
        <div>
            <section className="services-section mt-5 mb-5 coursesCard">
                <div className="container">
                <div className="row justify-content-center">
                        <h4> Schools Training </h4>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3 offset-3 col-xs-6 col-sm-6 wow fadeIn ">
                        <Link style={{ textDecoration: 'none' }}  onClick={() => handleOnClick("Schools Training Adult Training £19.75 per level")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Schools Training</h5>
                                <h6>Adult Training</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£19.75 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3  col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Schools Training Junior Training £19.75 per level")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Schools Training</h5>
                                <h6>Junior Training</h6>
                                <h6>5 Student(s) per class</h6>
                                <h6>£19.75 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                    
                    </div>
                    <div className="row justify-content-center">
                        <h4> Junior Courses</h4>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Junior Courses Self study + 1 group class / month - £9.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£9.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Junior Courses Self study + 1  group class / week - £14.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£14.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Junior Courses Self study + 1 one 1 - 1 class / month - £29.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£29.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Junior Courses Self study + one 1 - 1 class / week - £59.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Junior Courses</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£59.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h4> General English</h4>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn ">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("General English Self study + 1 group class / month - £14.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£14.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("General English Self study + 1 group class / week - £49.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£49.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("General English Self study + one 1 - 1 class / month - £39.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£39.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("General English Self study + one  1 - 1 class / week - £99.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">General English</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£99.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h4> Business Courses </h4>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn ">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Business Self study + 1 group class per month - £19.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Buisness Courses</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£19.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Business Self study + 1 group class per week - £79.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Business Courses</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£79.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Business Self study + one 1 - 1 class / month - £49.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Business Courses</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£49.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Buisness Self study + one 1 - 1 class / week - £119.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Business Courses</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£119.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h4> Examination Preparation</h4>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn ">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Examination Preparation Self study + 1 group class / month - £17.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£17.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Examination Self study + 1 group class / week - £75.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£75.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Examination Self study + one 1 to 1 class / month - £45.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£45.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Examination Self study + one 1 to 1 class / week - £115.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Examination Preparation</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£115.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h4> IELTS Preparation </h4>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3 offset-3 col-xs-6 col-sm-6 wow fadeIn ">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("IELTS Self study + 22 group classes, 10 maximum students, / month - £213.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">IELTS Preparation</h5>
                                <h6>Self study plus twenty two group classes per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£213.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3  col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("IELTS Self study + 22 group classes, 6 maximum students, / month - £313.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">IELTS Preparation</h5>
                                <h6>Self study plus twenty two group classes per month</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£313.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                    
                    </div>
                    <div className="row justify-content-center">
                        <h4>Specialised Examinations</h4>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn ">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Specialised Self study + 1 group class / month - £22.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Specialised Examinations</h5>
                                <h6>Self study plus one group class per month</h6>
                                <h6>10 Student(s) per class</h6>
                                <h6>£22.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Specialised Self study + 1 group class / week - £84.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Specialised Examinations</h5>
                                <h6>Self study plus one group class per week</h6>
                                <h6>6 Student(s) per class</h6>
                                <h6>£84.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Specialised Self study + one 1 to 1 class / week - £54.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Specialised Examinations</h5>
                                <h6>Self study plus one 1 to 1 class per month</h6>
                                <h6>1 Student per class</h6>
                                <h6>£54.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 wow fadeIn">
                        <Link style={{ textDecoration: 'none' }} onClick={() => handleOnClick("Specialised Self study + one 1 to 1 class / month - £124.95")}>
                                <div className="icon-wrapper">
                                <div className="icon">
                                    <img src={`${process.env.PUBLIC_URL}/assets/logo/logo-image.png`} />
                                </div>
                                <h5 className="mt-2">Specialised Examinations</h5>
                                <h6>Self study plus one 1 to 1 class per week</h6>
                                <h6>1 Student per class</h6>
                                <h6>£124.95 per level</h6>
                                <h6>(Duration of one level is 2 months)</h6>
                                </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Course
