var express = require("express");
var cookieSession = require("cookie-session")
var app = express();
var mongoose=require("mongoose")
var bodyParser = require('body-parser')
var server = app.listen(8090);

mongoose.connect('mongodb://localhost:27017/attend');

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieSession({
  name: 'session',
  keys: ["hi from hell"],
}))

app.use(express.static('public'));

app.use("/log",require("./controllers/log.js"));
app.use("/lecturer",require("./controllers/lect.js"));
app.use("/student",require("./controllers/device.js"));
app.use("/admin",require("./controllers/admin.js"));
app.use("/",require("./controllers/landing.js"));
