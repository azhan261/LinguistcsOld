import React from "react";
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { useHistory } from "react-router-dom";
import {createPlacement} from 'apiForPlacement';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";


function TableList() {

  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    onSubmit(content)

  }
  /*const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }*/
  const history = useHistory()
  

  const handleChange = (content,editor) => {

    console.log(content)
  };
  const handleSubmit = async (event) => {
    console.log(event)
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
        text: '',
    },

    //4 Make onSubmit propert to handle what happens to data on form submisison

    onSubmit: values => {
      console.log(values)
      //createTodo(formik.values)
      //redirecting 
      //history.push("/")
      onSubmit(formik.values)
    },
   
  })
  console.log(formik.errors)
  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Create Placement Test</CardTitle>
              </CardHeader>
              <CardBody>
              <form onSubmit={formik.handleSubmit} encType="multipart/form-data" id="admisionForm" >
                <Editor
                
                    apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                    value={formik.values.text}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                              'advlist autolink lists link image charmap print preview anchor',
                              'searchreplace visualblocks code fullscreen',
                              'insertdatetime media table paste code help wordcount'
                              ],
                      toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }}
                  //onEditorChange={handleEditorChange}
                  
                  onEditorChange={handleEditorChange}
                  
               />     
              </form>
              </CardBody>
            </Card>
            <br />
            <input type="submit" value="Submit" />
            </Col>
            <Col md="6">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Placement Test Results</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                
                </CardBody>
              </Card>
            </Col>
         </Row>
      </div>
    </>
  );
}

export default Tables;
