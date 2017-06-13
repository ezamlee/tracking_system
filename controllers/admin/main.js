var express = require("express");
var router = express.Router();
var subjects = require("../../models/subjects.js")
var admins = require("../../models/admins.js")

router.use("/dashboard",(req,resp,next)=>{
  console.log(req.session)
  if(req.session.username == undefined || req.session.logged == false){
    resp.send('not authenticated')
  }
  else next()
})

router.get("/", (req,resp)=>{
  resp.render("login.ejs",{title:"Admin Login"})
}).get("/subject/add/:track/:code/:name/:cTime/:tTime",(req,resp)=>{
  new subjects({
    track:req.params.track,
    code:req.params.code,
    name:req.params.name,
    cTime:req.params.cTime,
    tTime:req.params.tTime
  }).save((err,data)=>{
    if(err){
      resp.send("failed")
    }else {
      resp.send("success");
    }
  })
}).post("/",(req,resp)=>{
   id = req.body.u ;
   pass = req.body.p;
   admins.find({username:id,password:pass},{},(err,data)=>{
     if(err){resp.send("server error")
   }else if (data.length > 0 && data[0].username === id && data[0].password === pass){
       req.session.username = id
       req.session.logged   = true
       resp.send("success");
     }else{
       resp.send("not authenticated")
     }
   })
}).get("/dashboard",(req,resp)=>{
  resp.send("dashboard");
})

module.exports = router;


/*
  track:
  ,code:
  ,name:
  ,cTime:
  ,tTime:
*/
