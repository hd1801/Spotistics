import React, { useState } from "react";
function App() {
  // convert url query string into a javascript object.
  const params = Object.fromEntries(new URLSearchParams(window.location.search.substring(1)));
  const [isLoggedIn,setLoggedInStatus] = useState(("access_token" in params));
  console.log(isLoggedIn);
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
    <div className="App">
     { isLoggedIn ? <button onClick={handleCall} >Get data</button>:<button onClick={handleClick} >Login to spotify</button> }

    </div>
  );
}

export default App;
