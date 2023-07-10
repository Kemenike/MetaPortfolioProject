import React, { useRef, useState } from 'react'
import './AboutMe.css';
import emailjs from '@emailjs/browser';

function AboutMe() {

  const form = useRef(null);
  const formButton = useRef(null);

  const [userNameField, setUserNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [messageField, setMessageField] = useState("");

  // TODO: 4 Different Button States: Initial (Shows Submit), In progress (Loading), Confirmed(After Confirmed Clear message field), Failed
  const [buttonState, setButtonState] = useState({ state: "initial" })


  function clearForm() {

  }

  function handleSubmit(e) {
    e.preventDefault();

    // Adds Success Class. TODO: Add to submit button.
    form.current.classList += " success";



    // emailjs.sendForm('[service_tag]', '[template_tag]', form.current, 'public_api')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // })
  }

  return (
    <section id='about_me__main'>
      <h1 className="about_me__title">
        About Me
      </h1>
      <div className="container">
        <div className="row">
          <div className="text__wrapper">
            <p className="description">
              Hello, I'm Kanayo. I am a Web Develoeper looking for more awesome experiences. I am a self taught developer with an immense drive to learn more. I have an appetite to create beautiful looking webpages. My main tools are <span> ReactJS </span> and <span> React Redux.</span> I also have a background with <span> C++, Java, and Kotlin. </span>In my off time I also love learning about astronomy, cars, and motorcycles.
              <br />
              <br />
              Currently I am employed as an <span> Information Technology Specialist at Kern County. </span>
            </p>
          </div>
          <div className="contact_me__wrapper">
            <h1 className="contact__title">
              Contact Me
            </h1>
            <h3 className="description">
              If you like what you saw please contact me!
            </h3>
            <form className="test" onSubmit={handleSubmit} ref={form}>
              <label htmlFor="name_input">Name: </label>
              <input name='user_name' id='name'
                onChange={(e) => {
                  setUserNameField(e.target.value);
                }} />

              <label htmlFor='email_input'>Email: </label>
              <input type="email" id='email' name='user_email'
                onChange={(e) => {
                  setEmailField(e.target.value);
                }} />

              <label htmlFor="message_field">Leave a Message.</label>
              <textarea name="message" id="message_field"
                onChange={(e) => {
                  setMessageField(e.target.value);
                }} />

              <input
                type="submit"
                ref={formButton}
                className='submit__button'
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe