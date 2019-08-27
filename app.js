require("newrelic");

const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

setInterval(() => {
  http.get("http://pako-web-developer.herokuapp.com");
}, 300000); // 5 minutes

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://varp:stefasquale2306@ds217092.mlab.com:17092/website"
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));

const port = 8081;

const GMAIL_USER = "pasquale.delucia96@gmail.com";
const GMAIL_PASS = "stefasquale2306";

const emailSubSchema = new mongoose.Schema({
  email: String
});
var EmailSub = mongoose.model("User", emailSubSchema);

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./public/")
  });
});

app.post("/subscribe", (req, res) => {
  EmailSub.findOne({ email: req.body.emailSubscribe })
    .then(data => {
      if (!!data) {
        res.sendFile("subscribed.html", {
          root: path.join(__dirname, "./public/")
        });
      } else {
        const person = new EmailSub();
        person.email = req.body.emailSubscribe;
        person
          .save()
          .then(() => {
            res.sendFile("subscribed.html", {
              root: path.join(__dirname, "./public/")
            });
          })
          .catch(() => {
            res.sendFile("500.html", {
              root: path.join(__dirname, "./public/")
            });
          });
      }
    })
    .catch(() => {
      res.sendFile("500.html", {
        root: path.join(__dirname, "./public/")
      });
    });
});

// POST route from contact form
app.post("/contact", (req, res) => {
  const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  const mailOpts = {
    from: req.body.email,
    to: GMAIL_USER,
    subject: "New message from website" + req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  transporter.sendMail(mailOpts, (error, response) => {
    console.log("email send error: " + JSON.stringify(error));
    if (error) {
      res.sendFile("404.html", {
        root: path.join(__dirname, "./public/")
      });
    } else {
      res.sendFile("success.html", {
        root: path.join(__dirname, "./public/")
      });
    }
  });
});

app.listen(process.env.PORT || port);

// const server = app.listen(port, () => {
//   console.log("Server started at http://localhost:%s", port);
// });
