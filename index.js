import express from "express";
import axios from "axios";
import expressEjsLayouts from "express-ejs-layouts";
import connectlivereload from "connect-livereload";
import livereload from "livereload";
import { uploadFile } from "./server/src/middlewares/file-upload.middleware.js";

const app = express();
const PORT = 4000;
const API_Base_Url = "http://localhost:3000";
app.use(express.static("server/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(connectlivereload());
app.use(expressEjsLayouts);
app.set("view engine", "ejs");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});

let fetchedToken = null;
let fetchedPosts = null;
app.get("/", async (req, res) => {
  res.render("signup", { errorMessage: null });
});

app.post("/signup", async (req, res) => {
  let response = await axios.post(`${API_Base_Url}/api/signup`, req.body);
  if (response.data.success) {
    res.redirect("/signin");
  } else {
    res.render("signup", { errorMessage: response.data.message });
  }
});

app.get("/signin", (req, res) => {
  res.render("signin", { errorMessage: null });
});

app.post("/signin", async (req, res) => {
  let response = await axios.post(`${API_Base_Url}/api/signin`, req.body);
  if (response.data.success) {
    fetchedToken = response.data.token;
    let res2 = await axios.get(`${API_Base_Url}/api/posts/all`, {
      headers: { Authorization: fetchedToken },
    });
    fetchedPosts = res2.data;
    // res.render("home", { posts: res2.data, token:token  });
    res.render("home", { posts: fetchedPosts, token: fetchedToken });
    // res.redirect("/home");
  } else {
    res.render("/signin", { errorMessage: response.data.message });
  }
});

//test
app.get("/home", (req, res) => {
  res.render("home", { posts: null, token: null });
});

//make a new post
app.get("/create-post", (req, res) => {
  res.render("create-post");
});

app.post("/post", async (req, res) => {
  console.log("inside post post route before axios", req.body);
  let { caption, imageUrl } = req.body;
  try {
    let response = await axios.post(
      `${API_Base_Url}/api/post`,
      { caption: caption, imageUrl: document.querySelector("#imageUrl").files },
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    res.redirect("/home");
  } catch (err) {
    console.log("error is: ", err);
    res.redirect("/create-post");
  }
});

app.listen(PORT, () => {
  console.log(`client server is up and running on port ${PORT}`);
});
