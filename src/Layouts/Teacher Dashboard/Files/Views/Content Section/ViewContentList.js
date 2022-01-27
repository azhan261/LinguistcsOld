import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getCourseContents, deleteCourseContent } from "../../Apis/apiForCourseContent"


function ViewContentList() {

    let { id } = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getCourseContents()
        setItems(contents)
      }
      fetchItems()
    }, []);
    var serialNumber = 0
    const history = useHistory()
    const handleOnClickEdit = (data) => {
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
    const handleOnClickDelete = (data) => {
      axios.delete('http://localhost:7000/coursePlannings/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname : `/teacher/view-current-content/${id}`,
        state: data
      })
    }
    const handleOnClickAnswers = (data) => {
      if ( data.answertype == "Multiple Choice"){
        history.push({
          pathname:`/teacher/view-answers-mcq/${id}`

        })
      } else if ( data.answertype == "Fill in the Blanks"){
        history.push(`/teacher/view-answers-blanks/${id}`)
      } else if ( data.answertype == "Text"){
          history.push({
            pathname:`/teacher/view-answers-qa/${id}`,
            state: data
          })
      } else if ( data.answertype == "Pronunciation"){
        history.push(`/teacher/view-answers-pronunciation/${id}`)
      } 
      else if ( data.answertype == "HandWriting"){
        history.push(`/teacher/view-answers-handwriting/${id}`)
      } 
    }
    const onCreateBlog = (e) => {
      e.preventDefault()
      history.push(`/teacher/course-planning-content/${id}`)
    }
    const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
          <td>{serialNumber}</td>
      )
  }
    return (
          <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Course Planning</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
        <h6 className="m-0 font-weight-bold" className = "text-white">List Of Content</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Course Name</th>
                              <th>Question Title</th>
                              <th>Activity Type</th>
                              <th>Question Type</th>
                              <th>Answer Type</th>
                              <th>Marks of Question</th>
                              <th colSpan="4">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}
                                  <td>
                                      {contents.coursetype}
                                  </td>
                                  <td>
                                      {contents.questiontitle}
                                  </td>
                                  <td>
                                      {contents.activitytype}
                                  </td>
                                  <td>
                                      {contents.questiontype}
                                  </td>
                                  <td>
                                      {contents.answertype}
                                  </td>
                                  <td>
                                      {contents.totalmarks}
                                  </td>
                                  <td>
                                      <button className="btn btn-success" style = {{height:"90px", width: "90px"}} onClick={() => handleOnClickAnswers(contents)}>View Student Answers</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" style = {{height:"90px", width: "90px"}}  onClick={() => handleOnClickView(contents)}>View Content</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-light" style = {{height:"90px", width: "90px"}}  onClick={() => handleOnClickEdit(contents)}>Edit Content</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" style = {{height:"90px", width: "90px"}}  onClick={() => handleOnClickDelete(contents)}>Delete Content</button>
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>
          </table>
          <center>
                      <div>    
                      <div className="buttonNewTheme mt-4 mb-3">
                        <button className="btnSass play-pause buttonSass" style = {{fontWeight : "bold", width : "130px", height : "130px" }} onClick = {(e) => onCreateBlog(e)}>
                          Create Course Planning
                        </button>
                      </div>
                    </div>
                    </center>
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

export default ViewContentList
