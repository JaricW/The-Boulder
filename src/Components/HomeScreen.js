import React from "react";
import Contact from "./Contact";

import HeroImg from "../Images/HeroImg.JPG";
import BackBay from "../Images/BackBay.JPG";
import MiniComp from "../Images/MiniComp.JPG";

const HomeScreen = (props) => {
  return (
    <>
      <header
        id="theBoulder"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            textShadow: "2px 2px black",
            textAlign: "center",
          }}
        >
          The Boulder
        </h1>
        <img
          style={{
            position: "absolute",
            zIndex: "-1",
            objectFit: "cover",
            width: "100%",
            height: "50vh",
            opacity: "0.7",
          }}
          alt="indoor climbing"
          src={HeroImg}
        />
      </header>
      <main>
        <section className="layout">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>Climbing for Everyone in the centre of Sheffield</h2>
            <p>
              Whether you're a complete beginner or a world cup champion we have
              something for everyone. Rock Over Climbing has been open since
              2010. Through continued expansion we now have one of the largest
              bouldering centres in the UK.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              margin: "10px 10px 30px 10px",
              padding: "10px",
            }}
          >
            <h2>Register Online</h2>
            <p>
              Climbing has never been easier to get into. If you're 18 or over,
              just fill out our online registration form and then come down any
              time you like.
            </p>
            <div className="button" onClick={props.openRegistration}>
              Register Now
            </div>
          </div>
        </section>
        <div style={{ height: "50vh" }}>
          <img
            style={{
              objectFit: "cover",
              width: "80%",
              height: "100%",

              opacity: "0.8",
              margin: "0 10% 0 10%",
            }}
            alt="indoor climbing"
            src={BackBay}
          />
        </div>
        <section
          className="infoLayout"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            
            }}
          >
            <h3>Location</h3>
            <p>10 Rocky Ln,</p>
            <p> Sheffield City Centre,</p>
            <p>Sheffield S1 2EF</p>
          </div>

          <div
            id="info"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
         
            }}
          >
            <h3>Opening Times</h3>
            <p>Weekday: 10am-10pm</p>
            <p>Weekends: 9am-8pm</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
      
            }}
          >
            <h3>Prices</h3>
            <p>Adult Day Pass: £10</p>
            <p>Under 18 Day Pass: £7</p>
            <p>Shoe Hire: £2.50</p>
          </div>
        </section>
        <div style={{ height: "50vh" }}>
          <img
            style={{
              objectFit: "cover",
              width: "80%",
              height: "100%",
              marginLeft: "10%",
              marginRight: "10%",
              opacity: "0.9",
            }}
            alt="indoor climbing"
            src={MiniComp}
          />
        </div>
      </main>
      <Contact />
      <footer style={{ display: "flex", justifyContent: "center" }}>
        <h2>The Boulder</h2>
      </footer>
    </>
  );
};

export default HomeScreen;
