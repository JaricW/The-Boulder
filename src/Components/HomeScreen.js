import React from 'react';

const HomeScreen = () => {
    return (
        <>
        <header>
            <h1>
            The Boulder
            </h1>
        </header>
        <main style={{display: "grid", gridTemplateColumns: "50% 50%", gridAutoRows: "50vh"}}>
            <p>intro</p>
            <p>register</p>
            
            <img style={{objectFit: "cover", width: "100%", height:"100%"}} alt="indoor climbing" src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            
            <img style={{objectFit: "cover", width: "100%", height:"100%"}} alt="indoor climbing" src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <p>opening times & location</p>
            <p>prices</p>
            <img style={{objectFit: "cover", width: "100%", height:"100%"}} alt="indoor climbing" src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <img style={{objectFit: "cover", width: "100%", height:"100%"}} alt="indoor climbing" src="https://images.pexels.com/photos/5384641/pexels-photo-5384641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <p>contact us form</p>
        </main>
        <footer>
            <h2>The Boulder</h2>
        </footer>
        </>
    )
}

export default HomeScreen;