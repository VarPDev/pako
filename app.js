require("newrelic");

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// for static files
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/files", express.static(__dirname + "/files"));

const port = 8081;

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./public/")
  });
});

app.listen(process.env.PORT || port);
