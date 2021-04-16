import React from 'react';

export const RegisterConfirmation = () => {
    return(
    <div style={{backgroundColor: "orange", position: "fixed", top: "50px", right: "10px"}}>
    <h3>Your registration has been sent to The Boulder</h3>
    </div>
    )
}

export const EmailConfirmation = () => {
    return(
        <div style={{backgroundColor: "orange", position: "fixed", top: "50px", right: "10px"}}>
        <h3>Your email has been sent to The Boulder</h3>
        </div>
        )
}