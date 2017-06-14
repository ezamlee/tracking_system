var express = require("express");
var router = express.Router();
var mongoose=require("mongoose");
module.exports = router.get("/",(req,resp)=>{
  resp.send("lecturers login page")
})
