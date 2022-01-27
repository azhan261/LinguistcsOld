
import React, { useState, useEffect }  from 'react'
import { useRouteMatch, useHistory, useLocation, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Sidebar from './Sidebar';
import "../../sb-admin-2.css"

function TeacherDashboard() {

    const location = useLocation();
    
    return (
        <div>
          <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
        <h6 className="m-0 font-weight-bold" className = "text-white"></h6>
      </div>
      <div className="card-body text-center">
        
        <h3>Welcome {location.state.name}!</h3>
        
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
        </div>
    )
}

export default TeacherDashboard
