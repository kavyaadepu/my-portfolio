import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-head">
        <h3>Get In Touch</h3>
      </div>
      <div className="para">
        <p>
          Have a project in mind or just want to say hello? Feel free to send me
          a message. I'm
          <br /> always open to discussing new projects and opportunities
        </p>
      </div>
      <div className="contact-container">
        <form>
          <h6>Name</h6>
          <input type="text" className="inp1"></input>
          <h6>Email</h6>
          <input type="text" className="inp1"></input>
          <h6>Message</h6>
          <input type="text" className="inp2"></input>
        </form>
        <button className="message-btn">Send Message</button>
      </div>
    </section>
  );
}

export default Contact;
