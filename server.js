import express from "express";
import { siteData } from "./src/models.js";
// import { siteView } from "./src/views.js";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();
const port = process.env.PORT || 30107;

let currentPage = "";

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.get("/", (req, res) => {
  siteData.currentPage = "welcome";
  res.render("pages/index", siteData);
});

app.get("/nouns", (req, res) => {
  siteData.currentPage = "nouns";
  res.render("pages/nouns", siteData);
});

app.get("/books", (req, res) => {
  siteData.currentPage = "books";
  res.render("pages/books", siteData);
});

app.get("/translations", (req, res) => {
  siteData.currentPage = "translations";
  res.render("pages/translations", siteData);
});

app.get("/landscape-photos", (req, res) => {
  siteData.currentPage = "landscape-photos";
  res.render("pages/landscape-photos", siteData);
});

app.get("/jobs", (req, res) => {
  siteData.currentPage = "jobs";
  res.render("pages/jobs", siteData);
});

// app.get("/", (req, res) => {
//   res.render("pages/index", siteData);
// });

// app.get("/nouns", (req, res) => {
//   res.render("pages/nouns", siteData);
// });

// app.get("/books", (req, res) => {
//   res.render("pages/books", siteData);
// });

// app.get("/translations", (req, res) => {
//   res.render("pages/translations", siteData);
// });

// app.get("/landscape-photos", (req, res) => {
//   res.render("pages/landscape-photos", siteData);
// });

// app.get("/jobs", (req, res) => {
//   res.render("pages/jobs", siteData);
// });

// app.get("/", (req, res) => {
//   res.send(siteView(siteData));
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
