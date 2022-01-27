import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation , useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswers } from '../../Apis/apiForAnswers'

function ListOfStudentAnswers() {
    const location = useLocation();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAnswers()
        console.log(contents)
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClick = (data) => {
        console.log("works")
        history.push({
            pathname:"/view-current-answer",
            state: data
          })
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Content</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
        <h6 className="m-0 font-weight-bold" className = "text-white">List of Answers to Questions</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Question Title</th>
                              <th>Total Marks</th>
                              <th>Obtained Marks</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                  <td>
                                      {contents.questionTitle}
                                  </td>
                                  <td>
                                      {contents.totalMarks}
                                  </td>
                                  <td>
                                      {contents.marksObtained}
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Answer</button>
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>  
          </table>
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

export default ListOfStudentAnswers
