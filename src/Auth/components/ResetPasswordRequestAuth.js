import React, { Component } from "react";
import { notify } from "react-notify-toast";
import Spinner from "./Spinner";
//import { API_URL } from "./config";

export default class ResettPasswordRequestAuth extends Component {
  state = {
    sendingEmail: false
  };

  onSubmit = event => {
      console.log(this.email.value)
      event.preventDefault();
    /* Prevent a browser reload/refresh when the form submitted. It helps to keep the state condition */
    
    event.preventDefault();
    this.setState({ sendingEmail: true });

    
    fetch(`http://localhost:7000/email`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: this.email.value })
    })

      
  };

  render = () => {
    const { sendingEmail } = this.state;
    /* ref is put on the form let reset the form after submission */
    return (
      <form onSubmit={this.onSubmit} ref={form => (this.form = form)}>
        <div className = "mb-5 mt-5">
        <center>
            <div className = "mt-2">
                <h3>
                   We will send you a confirmation Email on your registered Email.
                </h3>
                <h4>
                    Please Enter your valid Email Address Below
                </h4>
            </div>
        <div className = "mt-5"> 
          <input className = "ml-4"
            type="email"
            name="email"
            ref={input => (this.email = input)}
            autoComplete="off"
            required
          />
          <label  className = "ml-2" htmlFor="email">Email</label>
        </div>
        <div>
          {/* While email is being sent, disable the button by showing spinner */}
          <button type="submit" className="btn btn-dark mt-3 mb-2" disabled={sendingEmail}>
            {sendingEmail ? <Spinner size="lg" spinning="spinning" /> : "Send"}
          </button>
        </div>
        </center>
        </div>
      </form>
    );
  };
}
