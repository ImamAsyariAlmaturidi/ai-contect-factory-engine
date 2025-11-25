import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const { json } = bodyParser;

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("AI Content Factory API Running!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
