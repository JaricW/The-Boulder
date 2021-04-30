import React from "react";
import emailjs from "emailjs-com";
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

  return (
    <>
      <section className="absolute z-20 bg-black md:mx-32">
        <form onSubmit={submitForm}>
          <div className="flex flex-col items-center text-center gap-2 p-5">
            <h2 className="text-xl text-yellow-500">Register Now</h2>
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
            <div className="flex justify-center items-center gap-2">
              <label for="agree">
                <p>I understand & agree</p>
              </label>
              <input type="checkbox" id="agree" required />
            </div>
            <input
              className="text-yellow-500 bg-black p-2 border-2 border-current rounded-md hover:bg-yellow-500 hover:text-black hover:border-current"
              type="submit"
              value="Register Now"
            />
          </div>
        </form>
        <div className="fixed top-3 left-3">
          <button
            className="text-yellow-500 bg-black p-2 border-2 border-current rounded-md hover:bg-yellow-500 hover:text-black hover:border-current"
            onClick={props.closeRegistration}
          >
            Go Back
          </button>
        </div>
      </section>
    </>
  );
};

export default Registration;
