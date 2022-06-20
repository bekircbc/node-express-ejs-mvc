import express from "express";
import { siteData } from "./src/models.js";
import { siteView } from "./src/views.js";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();
const port = process.env.PORT || 3007;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/views"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

// app.get("/", (req, res) => {
//   res.send(siteView(siteData));
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
