import React, { useState } from "react";
import CustomHeader from "./Components/CustomHeader"
import Login from "./Components/Login";
import Tracks from "./Components/Tracks";
import {MantineProvider ,AppShell} from '@mantine/core';
import "./App.css";
export const TokenContext = React.createContext();

function App() {
  // convert url query string into a javascript object.
  const params = Object.fromEntries(new URLSearchParams(window.location.search.substring(1)));
  const [isLoggedIn,setLoggedInStatus] = useState(("access_token" in params));
  const handleClick = ()=>{
    setLoggedInStatus(true);
    window.location= 'http://localhost:5000/login';
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
    <TokenContext.Provider value= {params.access_token}>
     { isLoggedIn ? <Tracks />: <Login handleClick = {handleClick} />}
    </TokenContext.Provider>
    </AppShell>    
    </MantineProvider>
  );
}

export default App;
