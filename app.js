var express = require("express");
var cookieSession = require("cookie-session")
var app = express();
var mongoose=require("mongoose")
var bodyParser = require('body-parser')
var server = app.listen(process.env.PORT || 8090);
var admins = require("./models/admins.js")
var log = require("./models/logs.js")
mongoose.connect('mongodb://sam:se@attend-shard-00-00-9qmjb.mongodb.net:27017,attend-shard-00-01-9qmjb.mongodb.net:27017,attend-shard-00-02-9qmjb.mongodb.net:27017/attend?ssl=true&replicaSet=attend-shard-0&authSource=admin');

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
app.use("/proof",require("./controllers/proof.js"));
app.use("/",require("./controllers/landing.js"));
app.get("/users",(req,resp)=>{
  admins.find({},{},(err,data)=>{
    resp.send(data);
  })
})
app.get("/logs",(req,resp)=>{
  log.find({},{"_id":0},(err,data)=>{
    resp.send(data);
  })
})
app.get("/logs/del",(req,resp)=>{
  log.remove({},(err,res)=>{
    resp.send(res);
  })
})
