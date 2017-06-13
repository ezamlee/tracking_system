var express = require("express");
var router = express.Router();
var device =  require("../models/devices.js")
var subjects =  require("../models/subjects")
router.get("/", (req,resp)=>{
  resp.send("<h1>This is the registration page</h1>")
}).get("/:pid/:name/:email/:hp/:track",(req,resp)=>{
  subjects.find({track:req.params.track},{code:1,_id:0},(err,data)=>{

    subjectList=[];

    data.forEach((obj)=>{
      subjectList.push(parseInt(obj.code))
    })
    subjectList.sort()

    new device({
        _id:req.params.pid
        ,reg:{
          name:req.params.name,
          email:req.params.email,
          hp:req.params.hp
        },
        subs:subjectList
    }).save((err,data)=>{
      if(err){
        resp.send("failed")
      }else {
        resp.send("success");
      }
    })
  })
})
module.exports = router;
