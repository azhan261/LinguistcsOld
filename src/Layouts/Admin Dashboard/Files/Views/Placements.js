import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getPlacements } from '../Apis/apiForPlacement';

function PlacementsForAdmin() {
    const [items, setItems] = useState([])
    const history = useHistory()
    /*const statusHandler =  async function(id) {
        const data = await getTeacher(id)
        data.status = "1"
        await updateTeacher(data, id)

    }
    */

    useEffect(() => {
      const fetchItems = async function() {
        const placements = await getPlacements()
        setItems(placements)
      }
      fetchItems()
    })
    const handleOnClickView = (data) => {
        history.push({
          pathname : "/view-current-content",
          state: data
        })
      }
      const handleOnClickAnswers = (data) => {
        if ( data.answertype == "Multiple Choice"){
          history.push("/view-answers-mcq")
        } else if ( data.answertype == "Fill in the Blanks"){
          history.push("/view-answers-blanks")
        } else if ( data.answertype == "Text"){
          history.push("/view-answers-qa")
        } else if ( data.answertype == "Pronunciation"){
          history.push("/view-answers-pronunciation")
        } 
      }
      
    return (
        <>
        <div className="container-fluid"> 
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Placements</CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <h3>Placement Registration List</h3>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                              <th>Full Name</th>
                              <th>Email Address</th>
                              <th>Country Code</th>
                              <th>Phone</th>
                              <th>Country Of Residence</th>
                              <th>Age Group</th>
                              <th>Gender</th>
                              <th>Date Of Birth</th>
                              <th colSpan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(placements => (
                                <tr key={placements._id}>
                                <td>
                                    {placements.name}
                                </td>
                                <td>
                                    {placements.email}
                                </td>
                                <td>
                                    {placements.country_code}
                                </td>
                                <td>
                                    {placements.phone}
                                </td>
                                <td>
                                    {placements.country}
                                </td>
                                <td>
                                    {placements.ageGroup}
                                </td>
                                <td>
                                    {placements.gender}
                                </td>
                                <td>
                                    {placements.dob}
                                </td>
                                <td>
                                      <button className="btn btn-success" onClick={() => handleOnClickAnswers(placements)}>View Student Answers</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    </div>
    </>
    )
}

export default PlacementsForAdmin
