import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation, useParams, } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function ViewCurrentContent() {
    let { id } = useParams();
    const location = useLocation();
    const history = useHistory()

    const handleOnClickEdit = (e, data) => {
        e.preventDefault()
        if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Text")){
          history.push({
            pathname:`/teacher/view-question-type-qa-edit/${id}`,
            state: data
          })
        }
        else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
          history.push({
            pathname:`/teacher/view-question-answer-type-mcq-edit/${id}`,
            state: data
          })
        }
        else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
          history.push({
            pathname:`/teacher/view-question-answer-type-blanks-edit/${id}`,
            state: data
          })
        } else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Pronunciation")){
          history.push({
            pathname:`/teacher/view-question-answer-type-pronunciation-edit/${id}`,
            state: data
          })
        }
        else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "HandWriting")){
          history.push({
            pathname:`/teacher/view-question-answer-type-handwriting-edit/${id}`,
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
    return (
   
          <>
      <div>
        <div className = "mt-5 pt-4">
                      {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Blogs</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                <h6 className="m-0 font-weight-bold" className = "text-white" className = "text-white">Create Blog</h6>
              </div>
              <div className="card-body">
                <div>
                <div className = "mt-4">
                        <div className="p-3 mb-2 text-white" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                            <label >Course Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.coursetype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div className="p-3 mb-2 text-white" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                            <label >Activity Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.activitytype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div className="p-3 mb-2 text-white" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                            <label >Question Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questiontype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div className="p-3 mb-2 text-white" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                            <label >Answer Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.answertype}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div className="p-3 mb-2 text-white" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                            <label >Question Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questiontitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div className="p-3 mb-2 text-white" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                            <label >Question Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questioncontent}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div className="p-3 mb-2 text-white" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                            <label >Total Marks</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.totalmarks}
                        </div>
                        <hr />
                    </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.containerBlackDashboard-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="containerBlackDashboard my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright © Logistics 2021</span>
            </div>
            </div>
          </footer>
          {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
          {/* End of Page Wrapper */}
                </div>
                </div>
              </>
    
    )
}

export default ViewCurrentContent
