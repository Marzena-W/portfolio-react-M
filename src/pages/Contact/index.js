import React, {useState} from 'react';
import './style.css';
import CV from '../../images/CV_Maggie_Wilk.pdf';

function Contact() {
  const [formState, setFormState] = useState({
    name:"",
    email:"",
    message:"",
  })
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formState);
    window.location.href="mailTo:marzena.m.wilk@gmail.com?subject="+formState.name+"&body="+formState.message
  }

  return (
    <div>
      <div className='main-para'>
        <p className="contact-header">Drop me a line.</p>
        <p className="para">if you have a project that you would like to discuss,
          or if you simply have some questions, I would love to
          hear from you. Please feel free to send me an email,
          or use the contact form.
        </p>
      </div>

      <div className='centered'>
        <div className="form col-lg-6 col-md-6 col-sm-12 contact-form">
          <form onSubmit={handleSubmit} id="contact-me">
            <div className="form-group">
              <input required value={formState.name} onChange={(event) => setFormState({...formState, name: event.target.value})} className="form-control form-control-sm" type="text" placeholder="Your name" id="name"></input>
            </div>

            <div className="form-group">
              <input required value={formState.email} onChange={(event) => setFormState({...formState, email: event.target.value})} className="form-control form-control-sm" type="email" placeholder="Your email" id="email"></input>
            </div>

            <div className="form-group">
              <textarea required value={formState.message} onChange={(event) => setFormState({...formState, message: event.target.value})} className="form-control form-control-sm" type="text" id="exampleFormControlTextarea1" placeholder="Message" rows="3" ></textarea>
            </div>

            <input type="submit" className="btn btn-primary custom-button button-form"/>
          </form>
        </div>
      </div>

      <div className='contact-buttons'>
      <a href="https://github.com/Marzena-W"> <button className='buttons' type="button"> GitHub</button></a>
      <a href="https://www.linkedin.com/in/thisismylinkedin/"><button className='buttons' type="button">LinkedIn</button></a>
      <a href="mailTo:marzena.m.wilk@gmail.com"><button className='buttons' type="button">Email</button></a>
      <a href= {CV} target = "_blank"><button className='buttons' type="button">CV</button></a>
      </div>
    </div>
  )
}

export default Contact;