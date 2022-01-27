import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink, BrowserRouter as Router, Switch, Route, useParams, useHistory, Link } from 'react-router-dom';
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import "../../black-dashboard-theme.css"

function Sidebar() {
  let { id } = useParams();
 
  const history = useHistory()
  const handleLocation = (e, data) => {
    e.preventDefault()
    history.push({
      pathname: `/teacher/course-planning-content/${id}`,
      state : data
  })
  }
  
  
  /*
  <Link to={location}/>
  <Redirect to={location}/>
  history.push(location)
  history.replace(location)
  */

    return (
  
        <div>
        <div className="sidebar" >
          <div className="sidebar-wrapper">
            <Nav>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3 text-white"
                      activeClassName="active"
                      onClick = {(e => handleLocation(e))}
                      to = ""
                    >
                      <i className = "tim-icons icon-badge" />
                      <p className = "text-white">Dashboard</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/teacher/course-planning-content/${id}`}
                    >
                      <i className = "tim-icons icon-single-copy-04" />
                      <p className = "text-white">Course Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/teacher/content-list/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p className = "text-white">View Course Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/teacher/class-schedule-list/${id}`}
                    >
                      <i className = "tim-icons icon-bell-55" />
                      <p className = "text-white">Schedule A Class</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/teacher/notification-list/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p className = "text-white">Notification</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/teacher/blogs/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p className = "text-white">Blogs</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/teacher/videochat/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p className = "text-white">Video Chat</p>
                    </NavLink>
                    <NavLink style = {{color : 'white'}}
                      className="nav-link mt-3"
                      activeClassName="active"
                      to={`/teacher/handwriting-demo/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p className = "text-white">HandWriting Demo</p>
                    </NavLink>
                   
            </Nav>
            
          </div>
        </div>
     

      </div>
      
    );
  };
  

export default Sidebar;
