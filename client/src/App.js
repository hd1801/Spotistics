import React, { useState } from "react";
import CustomHeader from "./Components/CustomHeader"
import Login from "./Components/Login";
import {MantineProvider ,AppShell} from '@mantine/core';
import "./App.css";
import TopTracks from "./Components/TopTracks";
import Home from "./Components/Home";
import TopArtists from "./Components/TopArtists";
export const TokenContext = React.createContext();

function App() {
  // convert url query string into a javascript object.
  const params = Object.fromEntries(new URLSearchParams(window.location.search.substring(1)));
  const [isLoggedIn,setLoggedInStatus] = useState(("access_token" in params));
  const [pageNo,setPage] = useState(0);
  const handleClick = ()=>{
    setLoggedInStatus(true);
    window.location= '/login';
  }
  const showPage= ()=>{
    switch(pageNo){
      case 1:
        return <TopTracks/> 
      case 2:
        return <TopArtists/> 
      default: 
      return <Home/> 
    }
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
    header={<CustomHeader loginStatus={isLoggedIn} handleClick = {handleClick} changePage = {setPage} />}    
    >
    <TokenContext.Provider value= {params.access_token}>
     { isLoggedIn ? 
     showPage()
     : <Login handleClick = {handleClick} />}
    </TokenContext.Provider>
    </AppShell>    
    </MantineProvider>
  );
}

export default App;
