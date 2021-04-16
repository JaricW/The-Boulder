import React, { useState } from "react";
import HomeScreen from "./Components/HomeScreen";
import NavBar from "./Components/NavBar";
import Registration from "./Components/Registration";
import { RegisterConfirmation } from "./Components/Confirmation";
import "./App.css";

function App() {
  const [register, setRegister] = useState(false);
  const [registerConfirm, setRegisterConfirm] = useState(false);

  const openRegistration = () => {
    setRegister(true);
    window.scrollTo({ top: 0 });
  };
  const closeRegistration = () => {
    setRegister(false);
    window.scrollTo({ top: 0 });
  };

  const confirmRegistration = async () => {
    setRegisterConfirm(true);
    console.log("yes this is it");
    setTimeout(function () {
      setRegisterConfirm(false);
    }, 5000);
  };

  return (
    <>
      {!register ? (
        <>
          <NavBar openRegistration={openRegistration} />
          <HomeScreen openRegistration={openRegistration} />
        </>
      ) : (
        <Registration
          closeRegistration={closeRegistration}
          confirmRegistration={confirmRegistration}
        />
      )}
      {registerConfirm ? <RegisterConfirmation /> : <></>}
    </>
  );
}

export default App;
