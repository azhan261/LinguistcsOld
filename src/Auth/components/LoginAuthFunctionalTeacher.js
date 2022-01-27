import React, { useState, useEffect }  from 'react'
import { Link , useHistory, useLocation} from 'react-router-dom';
import LoginService from '../services/LoginService';
import LoginServiceTeacher from 'Auth/services/LoginServiceTeacher';
import Message from '../elements/Message';
import Error from '../elements/Error';
import { getTeacher } from 'apiForTeachers';

import {
    COMMON_FIELDS,
    REGISTRATION_FIELDS,
    LOGIN_FIELDS,
    LOGIN_MESSAGE,
    ERROR_IN_LOGIN,
  } from '../MessageBundle';


function LoginAuthFunctionalTeacher() {
   
    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [errorState, setErrorState] = useState(false)
    const [loginSuccessState, setLoginSuccess] = useState(false)
    const history = useHistory()

    const handleOnChangeUserName = (e) => {
        console.log("car")
        setEmailState(e.target.value);
        console.log(emailState)
    };

    
    const handleOnChangePassword = (e) => {
        console.log("bike")
        setPasswordState( e.target.value );
        console.log(passwordState)
        
    };


    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
          email: emailState,
          password: passwordState,
          id : ''
        };
        console.log(data)
        const loginResult = await LoginServiceTeacher(data);
        if (loginResult !== 200) {
            setErrorState(true)
            setLoginSuccess(false)
        } else {
            console.log(loginResult)
            setErrorState(false)
            setLoginSuccess(true)
            /*
            console.log(data.email)
            data.id = '612b86db1bc22a07884603aa'
            console.log(data.id)
            */
            const gettingEmail = await getTeacher(data.email)
            console.log(gettingEmail)
            if(gettingEmail[0].status == "Teacher"){
              console.log("got it")
              console.log(gettingEmail[0]._id)
              var idForTeacher = gettingEmail[0]._id
              history.push({
                pathname : `/teacher/teacherDashboard/${idForTeacher}`,
                state: gettingEmail[0]
              })
            }
            else{
              console.log("not got it")
            }
            //history.push("/home")
            console.log("Error not hit")
        }
    };





    return (
        <div>
    <section className="services-section mt-5 mb-5 coursesCard">
      <div className="container">
      <div className="row justify-content-center">
      <h4> Log In To Your Account Teacher</h4>
      <div className="Login"> {' '}
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <div className="fields">
              <p> {COMMON_FIELDS.EMAIL} </p>    {' '}
              <input
                type="text"
                name="Username"
                onChange={(e) => handleOnChangeUserName(e)}
   
                required
              />
            </div>{' '}
            {' '}
            <div className="fields">
              {' '}
              <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
              <input
                type="password"
                name="Password"
                onChange={(e) => handleOnChangePassword(e)}

                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            <div className="buttons">
              {' '}
              <button
                type="button"
                onClick={(e) => onSubmit(e)}
                className="btn btn-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>{' '}
                  <Link to="/main/registration">
                     {REGISTRATION_FIELDS.REGISTER} </Link> 
                      {' '}
                      {' '}
                  <Link to="/main/reset-password-confirmation">
                     Forgot your password? </Link> 
                      {' '}
               {' '}
            </div>{' '}
               {' '}
          </div>{' '}
           {' '}
        </form>{' '}
            {loginSuccessState && <Message message={LOGIN_MESSAGE}  />}    {' '}
        {errorState && <Error message={ERROR_IN_LOGIN} />}    {' '}
      </div>
      </div>
      </div>
      </section>
    ); 
        </div>
    )
}

export default LoginAuthFunctionalTeacher
