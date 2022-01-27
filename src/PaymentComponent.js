import React, { useState, useEffect }  from 'react'
import { useRouteMatch, useHistory, useLocation, useParams } from "react-router-dom";


function PaymentComponent(props) {
   /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const match = useRouteMatch()
  const [todo, setTodo] = useState();
  const location = useLocation();

  useEffect(() => {
     console.log(location.state.name); // result: 'some_value'
  }, [location]);

  
    return (
      
        //3 put onSubmit={formik.handleSubmit} for form submission and make a property ion formik function to handle onSubmit event
      <div>
      <section className="s-space-equal">
        <div className="container">
          <h1 className="title-dark-big title-head"></h1>
          <p></p>
          <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <div className="login-registration-field">
                <h2 className="cart-area-title text-center pt-3">Payment Options</h2>
                <hr/>
                <p>{location.state.courses}</p>
                <div id="loader" style={{display: 'none'}}>
                  <img src={`${process.env.PUBLIC_URL}/assets/loader/tenor.gif`} width="100px" height="100px" />
                  <p>asas</p>
                  <h1>Hsasai</h1>
                </div>
          </div>
        </div>
        </div>
        </div>
      </section>
        </div>
    )
}

export default PaymentComponent
