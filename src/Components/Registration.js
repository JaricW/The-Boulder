import React from "react";
import emailjs from "emailjs-com";
import allStyles from "../Styles/formStyle";
import COU from "./COU";

const Registration = (props) => {
  const submitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_klpiylb",
        "template_ve33syk",
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

    props.closeRegistration();
    props.confirmRegistration();
  };

  const {
    registrationStyle,
    regFormLayout,
    headerStyle,
    tickBoxStyle,
    buttonHolderStyle,
  } = allStyles;

  return (
    <>
      <section style={registrationStyle}>
        <form onSubmit={submitForm}>
          <div style={regFormLayout}>
            <h2 style={headerStyle}>Register Now</h2>
            <label for="firstName">
              <p>First Name</p>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              name="firstName"
              required
            />
            <label for="lastName">
              <p>Last Name</p>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Smith"
              name="lastName"
              required
            />
            <label for="dob">
              <p>Email Address</p>
            </label>
            <input
              type="email"
              placeholder="example@theboulder.com"
              name="email"
              required
            />
            <label for="dob">
              <p>Date of Birth</p>
            </label>
            <input type="date" id="dob" name="dob" required />

            <COU />

            <p>
              Do you understand and agree to follow all of the above conditions
              of use?
            </p>
            <div style={tickBoxStyle}>
              <label for="agree">
                <p>I understand & agree</p>
              </label>
              <input type="checkbox" id="agree" required />
            </div>
            <input className="button" type="submit" value="Register Now" />
          </div>
        </form>
        <div style={buttonHolderStyle}>
          <div className="button" onClick={props.closeRegistration}>
            Go Back
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
