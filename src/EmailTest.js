import React from 'react';
import emailjs from 'emailjs-com';


export default function EmailTest() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1qutz1r', 'template_wy38vct', e.target, 'user_tnKGgI45CtSrFZ9plnkP0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}