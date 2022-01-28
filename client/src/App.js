import React, { useState } from "react";
import Login from "./Components/Login/Login";
import CustomHeader from "./Components/Header/CustomHeader"
import { Container,AppShell} from '@mantine/core';
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
    <AppShell className="bg" fixed
    header={<CustomHeader/>}
    >
    <Container  className="App"  fluid>
     { isLoggedIn ? <button onClick={handleCall} >Get data</button>: <Login handleClick = {handleClick} />}
    </Container>
    </AppShell>    
  );
}

export default App;
