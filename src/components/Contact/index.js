import React, {useState} from "react";
import {validateEmail} from "../../utils/helpers";

function Contact (){
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, SetFormState] = useState({subject: '', email: '', message: ''});
    const {subject, email, message} = formState;
    
    function handleChange (e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid){
                setErrorMessage('Your email is invalid')
            } else{
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is empty`)
            } else{
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            
            SetFormState({...formState, [e.target.name]: e.target.value})
        }
        
    }

    function handleSubmit (e){
        e.preventDefault();
        console.log(formState);
        window.open(`mailto:khaoulajabour4@gmail.com?cc=${formState.email}&subject=${formState.subject}&body=${formState.message}`)
    }
    return (
        <section className="contact-section">
          <h1 className="section-title">Contact me</h1>
          <div className="contact-form">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label py-2" htmlFor="email">Email address (cc):</label>
                    <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label className="form-label py-2" htmlFor="subject">Subject:</label>
                    <input className="form-control" type="text" name="subject" defaultValue={subject} onBlur={handleChange} />
                </div>
                <div>
                    <label className="form-label py-2" htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur ={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="mt-1 error-text">{errorMessage}!</p>
                    </div>
                )}
                <button className="btn hire-btn" type="submit" >Submit</button>
            </form>
          </div>
        </section>
      )
    
}

export default Contact;