import React, { useState } from "react";
import CustomHeader from "./Components/Header/CustomHeader"
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import {MantineProvider ,AppShell} from '@mantine/core';

import "./App.css";
function App() {
  // convert url query string into a javascript object.
  const params = Object.fromEntries(new URLSearchParams(window.location.search.substring(1)));
  const [isLoggedIn,setLoggedInStatus] = useState(("access_token" in params));
  const handleClick = ()=>{
    setLoggedInStatus(true);
    window.location= 'http://localhost:5000/';
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
    header={<CustomHeader loginStatus={isLoggedIn} handleClick = {handleClick}/>}
    
    >
     { isLoggedIn ? <Home params={params} />: <Login handleClick = {handleClick} />}
    </AppShell>    
    </MantineProvider>
  );
}

export default App;
