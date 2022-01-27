import React, { useState, useEffect }  from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {getStudentsSectionEnglishGroupOneMonthCreate, getStudentsSectionEnglishGroupOneMonthSort, getStudentsSectionEnglishGroupOneWeekShow} from '../../../../Apis/apiForSections'

function EnglishOneToOneWeekForAdmin() {
          
    const [section, setSection] = useState([])
    useEffect(() => {
        const fetchItems = async function() {
        const section = await getStudentsSectionEnglishGroupOneWeekShow()
        var lastItem = section[section.length - 1]
        if (lastItem.student1 == null){
            section[section.length - 1].student1 = {id: "testing1", name : "a"}
        }
        setSection(section)
        console.log(section)
        }
        fetchItems()
    }, [])

    return (
        <>
        <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Teachers</CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <h3>Sections</h3>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                              <th>Full Name</th>
                              <th colSpan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            section.map(sections => (
                                <tr key={sections._id}>
                                <td>
                                <ul style = {{listStyleType : "none"}}>
                                        {sections.student1.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student1.name}
                                        </li> : 
                                        <li> {sections.student1.name}
                                        </li>}
                                    </ul>
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

export default EnglishOneToOneWeekForAdmin
