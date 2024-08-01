import {} from "dotenv/config";
import express from "express";
import axios from "axios";

const PORT = process.env.PORT ?? 8000;
const API_URL = `https://riddles-api.vercel.app/random`;

const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const result = response.data;
    res.render("index.ejs", { riddle: result.riddle, answer: result.answer });
  } catch (error) {
    res.render("index.ejs", { error: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const result = response.data;
    res.render("index.ejs", { riddle: result.riddle, answer: result.answer });
  } catch (error) {
    res.render("index.ejs", { error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Your port ${PORT}, is now running`);
});
