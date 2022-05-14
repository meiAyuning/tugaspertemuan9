import express from "express";
import { request } from "http";
import { response } from "express";
import { readFileSync } from "fs";

const app = express();

app.get("/:navbar", (req, res) => {
  const data = readFileSync("./Data/navbar.json", "utf-8");
  const parameter = req.params.navbar;
  if (parameter == "indonesia") {
    res.json(JSON.parse(data).indonesia);
  } else if (parameter == "english") {
    res.json(JSON.parse(data).english);
  } else {
    console.log("error");
  }
});

app.get("/navbar2/:bahasa", (req, res) => {
  const parameter = req.params.bahasa;
  res.send(model_navbar(parameter));
});

app.get("/navbar4", async (req, res) => {
  let data = await navbar3();
  res.send(JSON.stringify(data));
});

app.listen(3001, () => {
  console.log("Server Hidup");
});
