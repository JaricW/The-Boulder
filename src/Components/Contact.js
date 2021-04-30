import React, { useState } from "react";
import emailjs from "emailjs-com";
import { EmailConfirmation } from "./Confirmation";

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

  return (
    <>
      <section id="contact" className="flex justify-center p-4">
        <form
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-2 my-5 border-white border-2 rounded-md p-4"
        >
          <h2 className="text-2xl">Contact Us</h2>
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
          <input className="text-yellow-500 bg-black p-2 border-2 border-current rounded-md hover:bg-yellow-500 hover:text-black hover:border-current" type="submit" value="Send Message" />
        </form>
      </section>
      {emailConfirm ? <EmailConfirmation /> : <></>}
    </>
  );
};

export default Contact;
