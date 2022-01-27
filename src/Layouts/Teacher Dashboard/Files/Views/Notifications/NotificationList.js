import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation, useParams  } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getNotifications, deleteNotification } from "../../Apis/apiForNotifications"

function NotificationListForTeachers() {
    let { id } = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getNotifications()
        setItems(contents)
      }
      fetchItems()
    }, []);
    var serialNumber = 0
    const history = useHistory()
    const location = useLocation();
    const handleOnClickDelete = (data) => {
      axios.delete('http://localhost:7000/notifications/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname:`/teacher/notification-answer/${id}`,
        state: data
      })
    }
    const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
          <td>{serialNumber}</td>
      )
  }
    
    return  (
    
          <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Queries</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
        <h6 className="m-0 font-weight-bold text-white">List of Student Created Queries</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Notification Title</th>
                              <th colSpan="3">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}
                                  <td>
                                      {contents.notificationTitle}
                                  </td>
                                  <td>
                                    <button className="btn btn-dark" onClick={() => handleOnClickView(contents)}>View Question / Submit Answer</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" onClick={() => handleOnClickDelete(contents)}>Delete Notification</button>
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

export default NotificationListForTeachers
