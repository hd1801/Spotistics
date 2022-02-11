import fetch from "node-fetch";
const callback = async (req,res,next)=>{
    const code = req.query.code || null;
    var body = {
      code: code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: 'authorization_code'  
      } 
    await fetch('https://accounts.spotify.com/api/token',{
      method: 'post',
      body: new URLSearchParams(body),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
      }
      })
        .then(resp => resp.json())
        .then(data => {
          res.redirect(`/?${new URLSearchParams(data)}`);
      });
      
  }
  export default callback;