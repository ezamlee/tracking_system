var express = require("express");
var router = express.Router();
var mongoose=require("mongoose");
module.exports = router.get("/",(req,resp)=>{
  resp.render("device/register.ejs",{title:"Register"})
})
