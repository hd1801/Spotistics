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

dotenv.config();
const app =express();

app.use(express.static(
  path.join(__dirname,"/client/build")));
app.use(cors());

const {PORT_NO} = process.env;

app.get("/",(req,res)=>{
    res.redirect("/login");
  });

  app.get("/login",login);

  app.get("/callback",callback);

  app.get('/refresh_token', refreshToken);

  app.listen(PORT_NO,()=>{
    console.log("server started at port ", PORT_NO);
});
