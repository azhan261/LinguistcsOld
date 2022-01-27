import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import moment from 'moment-timezone';
import { useRouteMatch, useHistory, useLocation, useParams } from "react-router-dom";
import { createClassSchedules } from '../../Apis/apiForClassSchedule';


function ClassScheduleForTeachers() {
            /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  let { id } = useParams();

  const log = (data) => {
      if (editorRef.current) {
        data.scheduleContent = editorRef.current.getContent();
        data.timezone = moment.tz.guess()
        var timeZoneTest = moment.tz("2021-08-26 03:14", "America/Toronto").format()
        console.log(timeZoneTest)
        var searchingDash = data.scheduleTime.indexOf("-")
        console.log(searchingDash)
        var startTimez = data.scheduleTime.slice(0, (searchingDash-1))
        var endTimez = data.scheduleTime.slice((searchingDash + 2), [data.scheduleTime.length])

       

        console.log(startTimez)
        console.log(endTimez)
 

        data.startTime = startTimez
        data.endTime = endTimez
        var creatingStartTime = data.scheduleDate + " " + data.startTime
        var creatingEndTime = data.scheduleDate + " " + data.endTime

        

        console.log(creatingStartTime)
        console.log(creatingEndTime)
        console.log("2021-08-26 01:55")

      

        var convertingTimeZoneStart = moment.tz(creatingStartTime, data.timezone).format()
        var convertingTimeZoneEnd = moment.tz(creatingEndTime, data.timezone).format()
     

      
        console.log(convertingTimeZoneStart)
        console.log(convertingTimeZoneEnd)
        console.log("2019-05-05T10:30:00Z")
        
        data.convertedTimeZoneStart = convertingTimeZoneStart
        data.convertedTimeZoneEnd = convertingTimeZoneEnd

       
        const dateToTime = date => date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric'
        });
  
        const dateString = timeZoneTest;
        const userOffset = new Date().getTimezoneOffset()*60*1000;
        const localDate = new Date(dateString);
        const utcDate = new Date(localDate.getTime() + userOffset);
  
        console.log(`${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`);
    
        //data.timezonePart1 = "2012-11-04 02:00""America/Los_Angeles"
        data.teacherId = data.teacherId.id
        console.log(data)
        createClassSchedules(data)
        history.push(`/teacher/class-schedule-list/${id}`)


      }
  };

  /*useEffect(() => {
    const fetchTodo = async () => {
      const blogstitle = await getPlacementTestblogstitle(`${props.match.params._id}`)
      setblogstitle(blogstitle)
    }
    fetchTodo()
  }, []);
  */
  const onSubmit = async (data) => {
    
    await log(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
          
           startTime:'',
           endTime: '',
           scheduleTitle:'',
           scheduleTime:'',
           scheduleContent:'',
           scheduleDate:'',
           timezone:'',
           convertedTimeZoneStart:'',
           convertedTimeZoneEnd:'',
           teacherId : {id}

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
            
            if(!values.scheduleTitle){
                errors.scheduleTitle = "Please enter your Schedule's Title"
            }
      
            return errors


        }


    })

    console.log("Form errors", formik.errors)
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
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Schedule</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
                <h6 className="m-0 font-weight-bold text-white">Create Schedule</h6>
              </div>
              <div className="card-body">
                <div>
                <form onSubmit={formik.handleSubmit}>
                    
                <div>
                    <label htmlFor>Title</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                             <input type="text" placeholder="Schedule's Title" name="scheduleTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scheduleTitle} className="form-control" required  />
                            {formik.errors.scheduleTitle && formik.touched.scheduleTitle ? (<div className='error'>{formik.errors.scheduleTitle}</div>) : null}
                    
                    </div>
                    <div>
                    <label htmlFor>Date</label>
                    <input type="date" name="scheduleDate" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.scheduleDate} className="form-control"  />
                    {formik.touched.scheduleDate ? (<div className='error'>{formik.errors.scheduleDate}</div>) : null}
                    </div>
                    <div>
                    <label htmlFor="rating_from">Time</label>
                            <select name="scheduleTime" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.scheduleTime} className="form-control" required>
                            <option value ="selecscheduleTime">Select a time duration</option>
                            <option>12:00 - 13:00</option>
                            <option>12:30 - 13:30</option>
                            <option>13:00 - 14:00 </option>
                            <option>13:30 - 14:30</option>
                            <option>14:00 - 15:00</option>
                            <option>14:30 - 15:30</option>
                            <option>15:00 - 16:00</option>
                            <option>15:30 - 16:30</option>
                            <option>16:00 - 17:00</option>
                            <option>16:30 - 17:30</option>
                            <option>17:00 - 18:00</option>
                            <option>17:30 - 18:30</option>
                            <option>18:00 - 19:00</option>
                            <option>18:30 - 19:30</option>
                            <option>19:00 - 20:00</option>
                            <option>19:30 - 20:30</option>
                            <option>20:00 - 21:00</option>
                            <option>20:30 - 21:30</option>
                            <option>21:00 - 22:00</option>
                            <option>21:30 - 22:30</option>
                            <option>22:00 - 23:00</option>
                            <option>22:30 - 23:30</option>
                            <option>23:00 - 00:00</option>
                            <option>23:30 - 00:30</option>
                            <option>00:00 - 01:00</option>
                            <option>00:30 - 01:30</option>
                            <option>01:00 - 02:00</option>
                            <option>01:30 - 02:30</option>
                            <option>02:00 - 03:00</option>
                            <option>02:30 - 03:30</option>
                            <option>03:00 - 04:00</option>
                            <option>03:30 - 04:30</option>
                            <option>04:00 - 05:00</option>
                            <option>04:30 - 05:30</option>
                            <option>05:00 - 06:00</option>
                            <option>05:30 - 06:30</option>
                            <option>06:00 - 07:00</option>
                            <option>06:30 - 07:30</option>
                            <option>07:00 - 08:00</option>
                            <option>07:30 - 08:30</option>
                            <option>08:00 - 09:00</option>
                            <option>08:30 - 09:30</option>
                            <option>09:00 - 10:00</option>
                            <option>09:30 - 10:30</option>
                            <option>10:00 - 11:00</option>
                            <option>10:30 - 11:30</option>
                            <option>11:00 - 12:00</option>
                            <option>11:30 - 12:30</option>
                            </select>
                          
                          {formik.touched.scheduleTime ? (<div className='error'>{formik.errors.scheduleTime}</div>) : null}
                    </div>
                    <div>
                    <label htmlFor>Message</label>
                    <Editor
                        apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                        height: 500,
                        browser_spellcheck : true,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatescheduleTime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    
                    </div>
                    <div className="buttonNewTheme mt-3 mb-3">
                                  <button type="submit" className="btnSass play-pause buttonSass" style = {{fontWeight : "bold", height: "120px", width: "120px" }} >
                                    Create Schedule
                                  </button>
                    </div>
                  </form>
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

export default ClassScheduleForTeachers
