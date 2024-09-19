import express from "express";
import axios from "axios";

const app = express();
const PORT = 4000;
const API_Base_Url = "http://localhost:3000";

app.set("view engine", "ejs");
app.get("/", async (req, res) => {
  let response = await axios.get(`${API_Base_Url}/posts`);
  res.render("home", { data: response.data });
});

app.listen(PORT, () => {
  console.log(`client server is up and running on port ${PORT}`);
});
