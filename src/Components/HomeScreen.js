import React from "react";

const HomeScreen = () => {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "center", height: "20vh" }}>
        <h1 style={{color: "white"}}>The Boulder</h1>
        <img
          style={{
              position: "absolute",
              zIndex: "-1",
            objectFit: "cover",
            width: "100%",
            height: "20vh",
 
          }}
          alt="indoor climbing"
          src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </header>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridAutoRows: "50vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          <h2>Climbing for Everyone in the centre of Sheffield</h2>
          <p>
            Whether you're a complete beginner or a world cup champion we have
            something for everyone. Rock Over Climbing has been open since 2010.
            Through continued expansion we now have one of the largest
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
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
            <h2>Register Online</h2>
          <p>
            Climbing has never been easier to get into. If you're 18 or over,
            just fill out our online registration form and then come down any
            time you like.
          </p>
          <button>Register Now</button>
        </div>

        <img
          style={{
            objectFit: "cover",
            width: "80%",
            height: "100%",
            marginLeft: "10%",
            marginRight: "10%",
          }}
          alt="indoor climbing"
          src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />

        <img
          style={{
            objectFit: "cover",
            width: "80%",
            height: "100%",
            marginLeft: "10%",
            marginRight: "10%",
          }}
          alt="indoor climbing"
          src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <div
          style={{
            display: "grid",
            marginLeft: "10%",
            marginRight: "10%",
            gridTemplateColumns: "50% 50%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginLeft: "10%",
              marginRight: "10%",
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
              justifyContent: "center",
              textAlign: "center",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <h3>Location</h3>
            <p>10 Rocky Ln, Sheffield City Centre, Sheffield S1 2EF</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginLeft: "10%",
            marginRight: "10%",
          }}
        >
          <h3>Prices</h3>
          <p>Adult Day Pass: £10</p>
          <p>Under 18 Day Pass: £7</p>
          <p>Shoe Hire: £2.50</p>
        </div>
        <img
          style={{
            objectFit: "cover",
            width: "80%",
            height: "100%",
            marginLeft: "10%",
            marginRight: "10%",
          }}
          alt="indoor climbing"
          src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <img
          style={{
            objectFit: "cover",
            width: "80%",
            height: "100%",
            marginLeft: "10%",
            marginRight: "10%",
          }}
          alt="indoor climbing"
          src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </main>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>contact us form</p>
      </div>
      <footer style={{ display: "flex", justifyContent: "center" }}>
        <h2>The Boulder</h2>
      </footer>
    </>
  );
};

export default HomeScreen;
