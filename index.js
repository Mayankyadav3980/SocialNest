import express from "express";
import axios from "axios";
import expressEjsLayouts from "express-ejs-layouts";
import connectlivereload from "connect-livereload";
import livereload from "livereload";

const app = express();
const PORT = 4000;
const API_Base_Url = "http://localhost:3000";
app.use(express.static('server/public'))
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});

app.use(connectlivereload());
app.use(expressEjsLayouts);
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("signup", { errorMessage: null });
});

app.post("/signup", async (req, res) => {
  try {
    let response = await axios.post(`${API_Base_Url}/api/signup`);
    if (response.status == 201) res.redirect("/signin");
    else res.render("signup", { errorMessage: "Please try again!" });
  } catch (err) {
    res.status(500).json({ message: "Error in registering new user" });
  }
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

app.post("/signin", async (req, res) => {
  try {
    let response = await axios.post(`${API_Base_Url}/api/signin`);
    res.render("home", { posts: response.data });
  } catch (err) {
    res.status(500).json({ message: "Error in signing in" });
  }
});

//test
app.get('/home',(req, res)=>{
  res.render('home');
})

app.listen(PORT, () => {
  console.log(`client server is up and running on port ${PORT}`);
});
