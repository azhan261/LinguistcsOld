import React, { useState, useEffect }  from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import {getStudentsSectionMaleAdultCreate, getStudentsSectionMaleAdultSort, getStudentsSectionMaleAdultShow} from '../../../../../Apis/apiForSections'
import { getTeachersSectionMaleAdult } from '../../../../../Apis/apiForTeachers';


function SectionForMaleStudentForAdmin() {
    const [section, setSection] = useState([])
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        const fetchItems = async function() {
        const section = await getStudentsSectionMaleAdultShow()
        const teacher = await getTeachersSectionMaleAdult()
        var lastItem = section[section.length - 1]
        if (lastItem.student1 == null){
            section[section.length - 1].student1 = {id: "testing1", name : "a"}
            section[section.length - 1].student2 = {id: "testing2", name : "a"}
            section[section.length - 1].student3 = {id: "testing3", name : "a"}
            section[section.length - 1].student4 = {id: "testing4", name : "a"}
            section[section.length - 1].student5 = {id: "testing5", name : "a"}
            section[section.length - 1].student6 = {id: "testing6", name : "a"}
            section[section.length - 1].student7 = {id: "testing7", name : "a"}
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student2 == null){
            section[section.length - 1].student2 = {id: "testing2", name : "a"}
            section[section.length - 1].student3 = {id: "testing3", name : "a"}
            section[section.length - 1].student4 = {id: "testing4", name : "a"}
            section[section.length - 1].student5 = {id: "testing5", name : "a"}
            section[section.length - 1].student6 = {id: "testing6", name : "a"}
            section[section.length - 1].student7 = {id: "testing7", name : "a"}
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student3 == null){
            section[section.length - 1].student3 = {id: "testing3", name : "a"}
            section[section.length - 1].student4 = {id: "testing4", name : "a"}
            section[section.length - 1].student5 = {id: "testing5", name : "a"}
            section[section.length - 1].student6 = {id: "testing6", name : "a"}
            section[section.length - 1].student7 = {id: "testing7", name : "a"}
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student4 == null){
            section[section.length - 1].student4 = {id: "testing4", name : "a"}
            section[section.length - 1].student5 = {id: "testing5", name : "a"}
            section[section.length - 1].student6 = {id: "testing6", name : "a"}
            section[section.length - 1].student7 = {id: "testing7", name : "a"}
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student5 == null){
            section[section.length - 1].student5 = {id: "testing5", name : "a"}
            section[section.length - 1].student6 = {id: "testing6", name : "a"}
            section[section.length - 1].student7 = {id: "testing7", name : "a"}
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student6 == null){
            section[section.length - 1].student6 = {id: "testing6", name : "a"}
            section[section.length - 1].student7 = {id: "testing7", name : "a"}
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student7 == null){
            section[section.length - 1].student7 = {id: "testing7", name : "a"}
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student8 == null){
            section[section.length - 1].student8 = {id: "testing8", name : "a"}
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student9 == null){
            section[section.length - 1].student9 = {id: "testing9", name : "a"}
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        } else if (lastItem.student10 == null){
            section[section.length - 1].student10 = {id: "testing10", name : "a"}
        }
        setSection(section)
        setTeacher(teacher)
        console.log(section)
        console.log(teacher                                                                                                                                        )
        }
        fetchItems()
    }, [])
    const onSubmit = async (data) => {
        
        //await log(data)
        //history.push("/placement-question-details")
      }
      const formik = useFormik({
        initialValues: {
            headOfficeName: '',
            startDate: '',
            endDate: '',
            productionDeadline: '',
            deliveryDate: '',
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property
        
        validate: values => {
            
   
            let errors = {}
  
            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.name){
                errors.headOffice = "Please fill in School Head Office Name"
            }else if (!letters.test(values.headOfficeName)) {
                errors.headOffice = "Please enter a valid School Head Office Name"
            }
            if(!values.startDate){
              errors.startDate = "Please fill in Order Opening Date"
            }
            if(!values.endDate){
              errors.endDate = "Please fill in Product Description"
            }
            if(!values.productionDeadline){
                errors.productionDeadline = "Please fill in Production Deadline"
            }
            if(!values.deliveryDate){
                errors.size = "Please fill in Delivery Date"
            return errors
            }


        }


    })
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
                                        {sections.student2.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student2.name}
                                        </li> : 
                                        <li> {sections.student2.name}
                                        </li>}
                                        {sections.student3.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student3.name}
                                        </li> : 
                                        <li> {sections.student3.name}
                                        </li>}
                                        {sections.student4.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student4.name}
                                        </li> : 
                                        <li> {sections.student4.name}
                                        </li>}
                                        {sections.student5.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student5.name}
                                        </li> : 
                                        <li> {sections.student5.name}
                                        </li>}
                                        {sections.student6.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student6.name}
                                        </li> : 
                                        <li> {sections.student6.name}
                                        </li>}
                                        {sections.student7.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student7.name}
                                        </li> : 
                                        <li> {sections.student7.name}
                                        </li>}
                                        {sections.student8.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student8.name}
                                        </li> : 
                                        <li> {sections.student8.name}
                                        </li>}
                                        {sections.student9.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student9.name}
                                        </li> : 
                                        <li> {sections.student9.name}
                                        </li>}
                                        {sections.student10.name == 'a' ?  
                                        <li style={{display:"none"}}>
                                        {sections.student10.name}
                                        </li> : 
                                        <li> {sections.student10.name}
                                        </li>}
                                    </ul>
                                </td>
                                <button className = "btn btn-dark">Assign a teacher</button>
                                <div>
                                <form>
                                    <select name="headOfficeName" className="form-control" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.headOfficeName}>
                                    {
                                        teacher.map(teachers => (
                                    <option>{teachers.name}</option>
                                        ))}
                                    </select>
                                </form>
                                </div>
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

export default SectionForMaleStudentForAdmin
