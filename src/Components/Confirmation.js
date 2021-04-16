import React from 'react';
import allStyles from "../Styles/formStyle";

export const RegisterConfirmation = () => {
    return(
    <div style={allStyles.confirmationStyle}>
    <h3>Your registration has been sent to The Boulder</h3>
    </div>
    )
}

export const EmailConfirmation = () => {
    return(
        <div style={allStyles.confirmationStyle}>
        <h3>Your email has been sent to The Boulder</h3>
        </div>
        )
}