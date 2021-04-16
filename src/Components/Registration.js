import React from "react";
import emailjs from "emailjs-com";

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
      <section
        style={{
          position: "absolute",
          marginLeft: "10%",
          width: "80%",
          background: "black",
          zIndex: "2",
        }}
      >
        <form onSubmit={submitForm}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              padding: "20px",
            }}
          >
            <h2 style={{ color: "orange" }}>Register Now</h2>
            <div style={{ margin: "0px 0px" }}>
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
            </div>
            <h3>Conditions of Use</h3>
            <h4>Risks</h4>{" "}
            <p>
              <i>
                “The British Mountaineering Council recognises that climbing and
                mountaineering are activities with a danger of personal injury
                or death. Participants in these activities should be aware of
                and accept these risks and be responsible for their own actions
                and involvement.”<br /> Although the climbing centre is an artificial
                environment the risks involved are no less serious than when
                climbing outside on a crag or mountain. <br />There is an additional
                risk that bolt-on holds can spin or break. If this occurs,
                please report it immediately to reception staff. The soft
                flooring under the bouldering walls is designed to provide a
                more comfortable landing for climbers falling or jumping from
                the bouldering wall. <br />THE SOFT FLOORING DOES NOT MAKE THE
                CLIMBING ANY SAFER. Broken and sprained limbs are common on this
                type of climbing wall despite the soft landing. Uncontrolled
                falls are likely to result in injuries to yourself or others.<br />
                Climbing beyond your capabilities on any wall is likely to
                result in a fall. <br />Any fall may result in an injury despite the
                safety systems in place to avoid it. You must make your own
                assessment of the risks whenever you climb.
              </i>
            </p>
            <h3>Our Duty of Care</h3>
            <p>
              The rules of the climbing centre set out below are not intended to
              limit your enjoyment of the facilities. They are part of the duty
              of care that we, as operators, owe to you, the customer, by law.
              As such they are not negotiable and if you are not prepared to
              abide by them then the staff must politely ask you to leave.
            </p>
            <h3>Your Duty of Care</h3>
            <p>
              You also have a duty of care to act responsibly towards the other
              users of the centre. Statements of ‘Good Practice’ are posted
              around the centre adjacent to the relevant facilities. These
              describe the accepted methods of use and how customers would
              normally be expected to behave towards each other.
            </p>
            <h3>Climbing</h3>
            <p>
              Before you climb in the centre you are expected to be
              competent in the basic safety knowledge required to use the centre.<br /><br />
              <ul style={{textAlign: "left"}}>
              <li>Avoid uncontrolled falls. </li>
              <li>Descend either by down-climbing,</li>
              jumping or at least a controlled fall.
              <li> Keep the mat free of
              objects and obstructions like bags, clothing, chalk bags, brushes
              etc. </li>
              <li>Don’t sit or stand under the wall when people are bouldering.</li>
             <li> Spotting involves helping someone to control their fall, not
              trying to catch them. Do not attempt to spot someone unless you
              feel confident to do it properly. Make sure the climber wants’ you
              to spot them. </li> 
              </ul>
              <br />
              You are required to register to say that you know
              how to use the equipment, that you are prepared to abide by the
              Rules below and that you understand the risks involved in your
              participation. 
              
              <p>If you are not confident in the use of any
              climbing equipment or technique then do not attempt to use it
              without the supervision of someone who is competent to do so.</p>
            </p>
            <br />
            <p>Do you understand and agree to follow all of the above conditions of use?</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <label for="agree">
                <p>I understand & agree</p>
              </label>
              <input type="checkbox" id="agree" required />
            </div>
            <input className="button" type="submit" value="Register Now" />
          </div>
        </form>
        <div
          style={{ position: "fixed", top: "10px", left: "10px" }}
        >
          <div className="button" onClick={props.closeRegistration}>Go Back</div>
        </div>
      </section>
    </>
  );
};

export default Registration;
