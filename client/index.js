import express from "express";
import axios from "axios";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const PORT = 4000;
const API_Base_Url = "http://localhost:3000";

app.use(expressEjsLayouts);
app.set("view engine", "ejs");


app.get("/", async (req, res) => {
  res.render("signup", { errorMessage: null});
});
app.post("/signup", async (req, res) => {
  let response = await axios.post(`${API_Base_Url}/api/signup`);
  // console.log(response);
  
  // res.render("register", { data: response.data });
  if(response.status == 201)
    res.redirect('/signin');
  else{
    res.render('signup',{ errorMessage: "Please try again!" });
  }
});

app.get('/signin', (req, res)=>{
  res.render('signin');
})

app.post('/signin', async (req, res)=>{
  let response = await axios.post(`${API_Base_Url}/api/signin`);
  res.render('home', { posts: response.data });
})

app.listen(PORT, () => {
  console.log(`client server is up and running on port ${PORT}`);
});
