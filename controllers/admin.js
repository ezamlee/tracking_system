var express = require("express");
var router = express.Router();
var subjects = require("../models/subjects.js")
var admins = require("../models/admins.js")

router.use("/dashboard",(req,resp,next)=>{
  if(
      req.session.username == undefined   ||
      req.session.logged   === false      ||
      req.session.userType !== "Admin"
    ){
    resp.send('not authenticated')
  }
  else next()
})

router.get("/", (req,resp)=>{
  resp.render("admin/login.ejs",{title:"Admin Login"})
})
.post("/",(req,resp)=>{
   id = req.body.u ;
   pass = req.body.p;
   admins.find({username:id,password:pass},{},(err,data)=>{
     if(err){resp.send("server error")
   }else if (
              data.length > 0 &&
              data[0].username === id &&
              data[0].password === pass
            ){
       req.session.username = id
       req.session.logged   = true
       req.session.userType = "Admin"
       req.session.isTotalAdmin  = data[0].isTotalAdmin || true;
       resp.send("success");
     }else{
       resp.send("not authenticated")
     }
   })
}).get("/dashboard",(req,resp)=>{
  if (req.session.isTotalAdmin){
    resp.render("admin/allAdmin.ejs",{title:"All Admin page"});
  }else{
    resp.render("admin/trackAdmin.ejs",{title:"Track Admin page"});
  }
})

module.exports = router;
