import React, {useState} from "react";
import {validateEmail} from "../../utils/helpers";

function Contact (){

    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form">
            <div>
                <label className="form-label" htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" />
            </div>
            <div>
                <label className="form-label" htmlFor="email">Email address:</label>
                <input className="form-control" type="email" name="email"  />
            </div>
            <div>
                <label className="form-label" htmlFor="message">Message:</label>
                <textarea className="form-control" name="message" rows="5" />
            </div>
            
            <button type="submit" >Submit</button>
          </form>
        </section>
      )
    
}

export default Contact;