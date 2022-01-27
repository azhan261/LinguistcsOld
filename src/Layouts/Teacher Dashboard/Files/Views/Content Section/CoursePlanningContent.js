import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useLocation, useParams } from "react-router-dom";
import { createCoursePlannings } from '../../Apis/apiForCoursePlanning'
import "../../../Sass.scss"

function CoursePlanningContent() {
         /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  let { id } = useParams();
  const location = useLocation()
  const history = useHistory()
  const onSubmitHandler = async (data) => {
    if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Text")){
      history.push({
        pathname:`/teacher/adult-course-content-text-qa/${id}`,
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:`/teacher/adult-course-content-text-mcq/${id}`,
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:`/teacher/adult-course-content-text-blanks/${id}`,
        state: data
      })
    } else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Pronunciation")){
      history.push({
        pathname:`/teacher/adult-course-content-text-pronunciation/${id}`,
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "HandWriting")){
      history.push({
        pathname:`/teacher/adult-course-content-text-handwriting/${id}`,
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Video")){
      history.push({
        pathname:`/teacher/adult-course-content-text-video/${id}`,
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/adult-course-content-text-audio/${id}`,
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Video")){
      history.push({
        pathname:`/teacher/adult-course-content-text-video/${id}`,
        state: data
      })
    }
    else if ((data.coursetype == "Adult Training") && (data.questiontype === "File Upload")){
      history.push({
        pathname:`/teacher/adult-course-content-file-upload/${id}`,
        state: data
      })
    }
    //history.push('/placement-question-details')
  }
  /*const onSubmit = async (data) => {
    //console.log(data)
    await createCoursePlannings(data)
    //await createQuestions(data)
    //await createPlacementTestQuestions(data)
    //redirecting 
    //history.push("/")
  };
  */
    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           coursetype:'',
           activitytype:'',
           questiontype:'',
           answertype:'',
           questioncontent:'',
           totalmarks:'',
           teacherId: {id}
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          //onSubmit(formik.values)
          onSubmitHandler(formik.values)

        },

        //5 Make validation property


    })

    console.log("Form errors", formik.errors)
    return (
        <>
      <div className = "mt-5 pt-4">
               {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Course Planning</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
        <h6 className="m-0 font-weight-bold text-white"> Content</h6>
      </div>
      <div className="card-body">
        <div>
        <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                          <label htmlFor="sel1">Course Type</label>
                          <select name="coursetype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.coursetype} className="form-control" >
                            <option>Select Course Type</option>                  
                            <option >Adult Training </option>
                            <option >Junior Training</option>
                            <option >Junior Courses Self study + 1 group class / month </option>
                            <option >Junior Courses Self study + 1  group class / week </option>
                            <option >Junior Courses Self study + 1 one 1 - 1 class / month </option>
                            <option >Junior Courses Self study + one 1 - 1 class / week</option>
                            <option >General English Self study + 1 group class / month</option>
                            <option >General English Self study + 1 group class / week</option>
                            <option >General English Self study + one 1 - 1 class / month</option>
                            <option >General English Self study + one  1 - 1 class / week</option>
                            <option >Business Self study + 1 group class per month</option>
                            <option >Business Self study + 1 group class per week</option>
                            <option >Business Self study + one 1 - 1 class per month</option>
                            <option >Buisness Self study + one 1 - 1 class per week</option>
                            <option >Examination Preparation Self study plus one group class per month</option>
                            <option >Examination Self study plus one group class per week</option>
                            <option >Examination Self study plus one 1 to 1 class per month</option>
                            <option >Self study plus one 1 to 1 class per weekh</option>
                            <option >IELTS Self study plus twenty two group classes per month</option>
                            <option >IELTS Self study plus twenty two group classes per month</option>
                            <option >Self study plus one group class per month</option>
                            <option >Self study plus one group class per week</option>
                            <option >Self study plus one 1 to 1 class per week</option>
                            <option >Self study plus one 1 to 1 class per month</option>
                          </select>
                          {formik.touched.coursetype ? (<div className='error'>{formik.errors.coursetype}</div>) : null}
                        </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Activity Type</label>
                          <select name="activitytype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.activitytype} className="form-control" >
                          <option>Select Activity Type</option>                  
                            <option>Listening Activity</option>
                            <option>Writing Activity</option>
                            <option>Reading Activity</option>
                            <option>Speaking Activity</option>
                          </select>
                          {formik.touched.activity ? (<div className='error'>{formik.errors.activity}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Question Type</label>
                          <select name="questiontype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.questiontype} className="form-control" >
                          <option>Select Question Type</option>                  
                            <option>Text</option>
                            <option>File Upload</option>
                          </select>
                          {formik.touched.questiontype ? (<div className='error'>{formik.errors.questiontype}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Answer Type</label>
                          <select name="answertype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.answertype} className="form-control" >
                          <option>Select Answer Type</option>                  
                            <option>Multiple Choice</option>
                            <option>Video</option>
                            <option>Audio</option>
                            <option>Text</option>
                            <option>Fill in the Blanks</option>
                            <option>Pronunciation</option>
                            <option>HandWriting</option>
                          </select>
                          {formik.touched.answertype ? (<div className='error'>{formik.errors.answertype}</div>) : null}
                        </div>
                      </div>
                      <div className="buttonNewTheme mt-4 mb-2">
                        <button type="submit" className="btnSass play-pause buttonSass" style = {{fontWeight : "bold"}}>
                          Submit
                        </button>
                      </div>
                    </form>
        </div>
      </div>
    </div>
  </div>
  {/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}

{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
    </>
    )
}



export default CoursePlanningContent
