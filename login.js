const login = (req,res)=>{
    // URL Search Params tostring method is used to convert the object into a url query strings { query string as given in DOCS is deprecated }.
    res.redirect('https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      redirect_uri: process.env.REDIRECT_URI,
      scope: "user-top-read user-read-recently-played user-read-currently-playing user-follow-read user-library-read user-read-recently-played playlist-read-collaborative playlist-read-private"
    }).toString());
}
export default  login;