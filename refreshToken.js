import fetch from "node-fetch";
const refreshToken = async (req,res)=>{
    var refresh_token = req.query.refresh_token;
    var body = {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
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
            res.redirect(`http://localhost:3000/?${new URLSearchParams(data)}`);
      });
  }
  export default refreshToken;