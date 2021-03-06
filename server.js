import express from "express"
import dotenv from "dotenv"
import cors  from "cors"
import callback from "./callback.js";
import login from "./login.js";
import refreshToken from "./refreshToken.js";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
if (process.env.NODE_ENV !== 'production') dotenv.config();

const app =express();

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app

app.use(cors());

const {PORT} = process.env;


  app.get("/login",login);

  app.get("/callback",callback);

  app.get('/refresh_token', refreshToken);

  app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

  app.listen(PORT,()=>{
    console.log(path.join(__dirname, 'client/build'));
    console.log("server started at port ", PORT);
});
