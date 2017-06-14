var express = require("express");
var router = express.Router();
var mongoose=require("mongoose");
var logs = require("../models/logs.js")

// to remove error : Mongoose: mpromise (mongoose's
// default promise library) is deprecated
mongoose.Promise = global.Promise;

module.exports = router.get("/:device/:rssi/:gateway",(req,resp)=>{
  new logs({
     device:req.params.device
    ,rssi:req.params.rssi
    ,gateway:req.params.gateway
  }).save((err,data)=>{
    if (err){
      resp.send("Error Saving Data")
      console.log(err)
    }else{
      resp.send("Success")
      console.log(data)
    }
  })
})
