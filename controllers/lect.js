var express = require("express");
var router = express.Router();
var mongoose=require("mongoose");
module.exports = router.get("/",(req,resp)=>{
  resp.render("lect/login.ejs",{title:"lecture login Page"})
}).get("/sessions",(req,resp)=>{
  resp.render("lect/sessions.ejs",{title:"Sessions"})
}).get("/sessionview",(req,resp)=>{
  resp.render("lect/sessionview.ejs",{title:"Session View"})
}).get("/attendance",(req,resp)=>{
  resp.render("lect/attendance.ejs",{title:"Attendance"})
})
