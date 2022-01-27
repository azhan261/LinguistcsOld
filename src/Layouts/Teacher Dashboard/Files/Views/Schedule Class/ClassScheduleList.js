import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams, } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getClassSchedules } from '../../Apis/apiForClassSchedule';

function ClassScheduleListForTeachers() {
    let { id } = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getClassSchedules()
        setItems(contents)
      }
      fetchItems()
    }, []);
    var serialNumber = 0
    const history = useHistory()
    const handleOnClickEdit = (data) => {
       
      history.push({
        pathname:`/teacher/edit-schedule/${id}`,
        state: data
      })
      
    }
    const handleOnClickDelete = (data) => {
      axios.delete('http://localhost:7000/class-scheduler/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname:"/current-blog-view",
        state: data
      })
    }
    const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
          <td>{serialNumber}</td>
      )
  }
  const onCreateBlog = (e) => {
    e.preventDefault()
    history.push(`/teacher/class-schedule/${id}`)
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
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Schedules</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
        <h6 className="m-0 font-weight-bold text-white">List of Scheduled Classes</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Title</th>
                              <th>Date</th>
                              <th>Time</th>
                              <th colSpan="3">Action</th>
                              </tr>
                          </thead>
                          <tbody>

                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}
                                  <td>
                                      {contents.scheduleTitle}
                                  </td>
                                  <td>
                                      {contents.scheduleDate}
                                  </td>
                                  <td>
                                      {contents.scheduleTime}
                                  </td>
                                
                                  <td>
                                      <button className="btn btn-light"  onClick={() => handleOnClickEdit(contents)}>Edit Schedule</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" onClick={() => handleOnClickDelete(contents)}>Delete Schedule</button>
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>
          </table>
          <center>
                      <div>    
                      <div className="buttonNewTheme mb-3">
                        <button className="btnSass play-pause buttonSass" style = {{fontWeight : "bold", height: "120px", width: "120px" }} onClick = {(e) => onCreateBlog(e)}>
                          Create Schedule 
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

export default ClassScheduleListForTeachers
