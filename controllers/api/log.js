var express = require("express");
var router = express.Router();
var mongoose=require("mongoose");
var logs = require("../../models/logs.js")

// to remove error : Mongoose: mpromise (mongoose's default promise library) is deprecated
mongoose.Promise = global.Promise;

module.exports = router.get("/", (req,resp)=>{
    resp.send("<h1>This is the log api</h1>")
}).get("/:device/:rssi/:loc",(req,resp)=>{
  new logs({
     device:req.params.device
    ,rssi:req.params.rssi
    ,loc:req.params.loc
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
