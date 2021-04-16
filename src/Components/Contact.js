import React, { useState } from "react";
import emailjs from "emailjs-com";
import { EmailConfirmation } from "./Confirmation";
import allStyles from "../Styles/formStyle";

const Contact = () => {
  const [emailConfirm, setEmailConfirm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_klpiylb",
        "template_tk2hsj5",
        e.target,
        "user_TynmWOHqmpZznJf5KWIbt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    confirmEmail();
  };

  const confirmEmail = async () => {
    setEmailConfirm(true);
    setTimeout(function () {
      setEmailConfirm(false);
    }, 5000);
  };

  const { contactLayout, contactFormLayout } = allStyles;
  return (
    <>
      <section id="contact" style={contactLayout}>
        <form onSubmit={sendEmail} style={contactFormLayout}>
          <h2>Contact Us</h2>
          <input type="text" placeholder="Name" name="name" required />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
          <textarea
            placeholder="Your Message"
            cols="35"
            rows="8"
            name="message"
            required
          />
          <input class="button" type="submit" value="Send Message" />
        </form>
      </section>
      {emailConfirm ? <EmailConfirmation /> : <></>}
    </>
  );
};

export default Contact;
