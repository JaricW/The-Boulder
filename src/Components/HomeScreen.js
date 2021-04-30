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
        className="flex justify-center items-center h-64 md:h-80"
      >
        <h1 className="text-6xl text-center z-10">The Boulder</h1>
        <img
          className="absolute z-0 object-cover w-full h-64 md:h-80 opacity-70"
          alt="indoor climbing"
          src={HeroImg}
        />
      </header>
      <main>
        <section className="grid mx-6 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center text-center m-2 p-4 md:p-10">
            <h2 className="text-xl p-4">
              Climbing for Everyone in the centre of Sheffield
            </h2>
            <p>
              Whether you're a complete beginner or a world cup champion we have
              something for everyone. The Boulder has been open since 2016.
              Through continued expansion we now have one of the largest
              bouldering centres in the UK.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center m-2 p-4 md:p-10">
            <h2 className="text-xl p-4">Register Online</h2>
            <p className="mb-4">
              Climbing has never been easier to get into. If you're 18 or over,
              just fill out our online registration form and then come down any
              time you like.
            </p>
            <button
              className="text-yellow-500 bg-black p-2 border-2 border-current rounded-md hover:bg-yellow-500 hover:text-black hover:border-current"
              onClick={props.openRegistration}
            >
              Register Now
            </button>
          </div>
        </section>
        <div className="h-80 flex justify-center">
          <img
            className="object-cover w-5/6 opacity-80"
            alt="indoor climbing"
            src={BackBay}
          />
        </div>
        <section className="grid md:grid-cols-3 mx-6 p-4 md:p-10">
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-lg p-2">Location</h3>
            <p>10 Rocky Ln,</p>
            <p> Sheffield City Centre,</p>
            <p>Sheffield S1 2EF</p>
          </div>
          <div id="info" className="flex flex-col justify-center text-center">
            <h3 className="text-lg p-2">Opening Times</h3>
            <p>Weekday: 10am-10pm</p>
            <p>Weekends: 9am-8pm</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-lg p-2">Prices</h3>
            <p>Adult Day Pass: £10</p>
            <p>Under 18 Day Pass: £7</p>
            <p>Shoe Hire: £2.50</p>
          </div>
        </section>
        <div className="h-80 flex justify-center">
          <img
            className="object-cover w-5/6 opacity-80"
            alt="indoor climbing"
            src={MiniComp}
          />
        </div>
      </main>
      <Contact />
      <footer className="flex justify-center p-6">
        <h2 className="font-Zen text-lg">The Boulder</h2>
      </footer>
    </>
  );
};

export default HomeScreen;
