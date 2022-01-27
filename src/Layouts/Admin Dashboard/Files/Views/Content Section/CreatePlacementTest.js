import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createPlacements } from '../../Apis/apiForPlacement';



function CreatePlacementTestForAdmin() {


       /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

 
  const onSubmitHandler = async (data) => {
    if ((data.questiontype === "Text") && (data.answertype === "Text")){
      history.push({
        pathname:"/placement-test-content-text-qa",
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:"/placement-test-content-text-mcq",
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:"/placement-test-content-text-blanks",
        state: data
      })
    } else if ((data.questiontype === "Text") && (data.answertype === "Pronunciation")){
      history.push({
        pathname:"/placement-test-content-text-pronunciation",
        state: data
      })
    }
    else if ((data.questiontype === "File Upload")){
      history.push({
        pathname:" d",
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
           totalmarks:''
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
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Questions</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                    <form onSubmit={formik.handleSubmit}>
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
                          </select>
                          {formik.touched.answertype ? (<div className='error'>{formik.errors.answertype}</div>) : null}
                        </div>
                      </div>
                      <center>
                      <button type="submit" className="btn btn-dark">
                        Create Questions
                      </button>
                    </center>
                    </form>
                    </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default CreatePlacementTestForAdmin


