const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

const app = express();
app.engine(
  "hbs",
  hbs({
    extname: "handlebars",
    layoutsDir: "./views/layouts",
    defaultLayout: "main",
  })
);

app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.use("/user", (req, res) => {
  res.render("forbidden");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/contact/send-message", (req, res) => {
  const { author, sender, title, message, file } = req.body;

  if (author && sender && title && message && file) {
    res.render("contact", { isSent: true, fileName: file });
  } else {
    res.render("contact", { isError: true });
  }
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/info", (req, res) => {
  res.render("info");
});

app.get("/history", (req, res, next) => {
  res.render("history", { layout: "dark" });
});

app.get("/hello/:name", (req, res) => {
  res.render("hello", { name: req.params.name });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
