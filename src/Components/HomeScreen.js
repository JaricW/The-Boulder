import React from "react";
import Contact from "./Contact";
import allStyles from "../Styles/homescreenStyle";

import HeroImg from "../Images/HeroImg.JPG";
import BackBay from "../Images/BackBay.JPG";
import MiniComp from "../Images/MiniComp.JPG";

const HomeScreen = (props) => {
  const {
    titleStyle,
    headerStyle,
    heroImgStyle,
    imgStyle,
    introDiv,
    imgHolder,
    infoDiv,
    footerStyle,
    footerFont,
  } = allStyles;
  return (
    <>
      <header id="theBoulder" style={headerStyle}>
        <h1 style={titleStyle}>The Boulder</h1>
        <img style={heroImgStyle} alt="indoor climbing" src={HeroImg} />
      </header>
      <main>
        <section className="layout">
          <div style={introDiv}>
            <h2>Climbing for Everyone in the centre of Sheffield</h2>
            <p>
              Whether you're a complete beginner or a world cup champion we have
              something for everyone. The Boulder has been open since 2016.
              Through continued expansion we now have one of the largest
              bouldering centres in the UK.
            </p>
          </div>
          <div style={introDiv}>
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
        <div style={imgHolder}>
          <img style={imgStyle} alt="indoor climbing" src={BackBay} />
        </div>
        <section className="infoLayout">
          <div style={infoDiv}>
            <h3>Location</h3>
            <p>10 Rocky Ln,</p>
            <p> Sheffield City Centre,</p>
            <p>Sheffield S1 2EF</p>
          </div>
          <div id="info" style={infoDiv}>
            <h3>Opening Times</h3>
            <p>Weekday: 10am-10pm</p>
            <p>Weekends: 9am-8pm</p>
          </div>
          <div style={infoDiv}>
            <h3>Prices</h3>
            <p>Adult Day Pass: £10</p>
            <p>Under 18 Day Pass: £7</p>
            <p>Shoe Hire: £2.50</p>
          </div>
        </section>
        <div style={imgHolder}>
          <img style={imgStyle} alt="indoor climbing" src={MiniComp} />
        </div>
      </main>
      <Contact />
      <footer style={footerStyle}>
        <h2 style={footerFont}>The Boulder</h2>
      </footer>
    </>
  );
};

export default HomeScreen;
