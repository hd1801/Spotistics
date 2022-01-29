import React, { useState } from "react";
import Login from "./Components/Login/Login";
import CustomHeader from "./Components/Header/CustomHeader"
import {MantineProvider ,Container,AppShell} from '@mantine/core';
import "./App.css";
function App() {
  // convert url query string into a javascript object.
  const params = Object.fromEntries(new URLSearchParams(window.location.search.substring(1)));
  const [isLoggedIn,setLoggedInStatus] = useState(("access_token" in params));
  const handleClick = ()=>{
    setLoggedInStatus(true);
    window.location= 'http://localhost:5000/';
  }

  const handleCall = async ()=>{
   await fetch("https://api.spotify.com/v1/me/top/tracks",{method:"GET",
    headers: {Authorization: 'Bearer ' + params.access_token}
   })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    }).catch( err => console.log(err)) 
  }

  return (
    <MantineProvider
    theme ={{
      colorScheme: "dark",
      fontFamily: 'Poppins, sans-serif',
      primaryColor: 'green',
    }}
    >
    <AppShell className="bg" fixed
    header={<CustomHeader handleClick = {handleClick}/>}
    
    >
     { isLoggedIn ? <button onClick={handleCall} >Get data</button>: <Login handleClick = {handleClick} />}
    </AppShell>    
    </MantineProvider>
  );
}

export default App;
