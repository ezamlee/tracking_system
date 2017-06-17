var express = require("express");
var router = express.Router();
var subjects = require("../models/subjects.js")
var admins = require("../models/admins.js")
var tracks = require("../models/tracks.js")

router.use("/login",(req,resp,next)=>{
  if(
      req.session.username !== undefined   &&
      req.session.logged   === true      &&
      req.session.userType === "Admin"
    ){
      resp.redirect("/admin/dashboard");
  }
  else next()
})
.use("/dashboard",(req,resp,next)=>{
  if(
      req.session.username == undefined   ||
      req.session.logged   === false      ||
      req.session.userType !== "Admin"
    ){
    resp.send('not authenticated')
  }
  else next()
})
.use("/dashboard/totaladmin/trackadmin",(req,resp,next)=>{
  admins.find({username:req.session.username,isTotalAdmin:true},{},(err,data)=>{
    if((!err) && data.length > 0 && req.session.logged){
      next();
    }else{
      resp.send({status:"failed",reason:"Not Authorized"})
    }
  })
})
.use("/dashboard/list/*",(req,resp,next)=>{
  if(req.session.logged == false || req.session.logged ==undefined){
    resp.send({status:"failed",reason:"Please Log In"})
  }else{
    next();
  }
})
router.get("/login", (req,resp)=>{
  resp.render("admin/login.ejs",{title:"Admin Login"})
})
.post("/",(req,resp)=>{
   id = req.body.u ;
   pass = req.body.p;
   admins.find({username:id,password:pass},{},(err,data)=>{
     if(err){resp.send("server error",JSON.stringify(err));console.log(err)
   }else if (
              data.length > 0 &&
              data[0].username === id &&
              data[0].password === pass
            ){
       req.session.username = id
       req.session.logged   = true
       req.session.userType = "Admin"
       req.session.isTotalAdmin  = data[0].isTotalAdmin
       resp.send("success");
     }else{
       resp.send("not authenticated")
     }
   })
})
.get("/dashboard/list/tracks",(req,resp)=>{
  tracks.find({},{"_id":0,name:1},(err,data)=>{
    if(!err && data.length > 0 )
      resp.send({status:"success",reason:"Query completed",data:data})
    else
      resp.send({status:"failed",reason:"Error in connection or no data"})
  })

})
.get("/dashboard",(req,resp)=>{
  if (req.session.isTotalAdmin){
    resp.render("admin/allAdmin.ejs",{title:"All Admin page"});
  }else{
    resp.render("admin/trackAdmin.ejs",{title:"Track Admin page"});
  }
})
.put('/dashboard/totaladmin/trackadmin',(req,resp)=>{
    admins.find({"$or":[{"username":req.body.adname},{"manage":[req.body.adtrack]}]},{},(err,data)=>{
      if(!err && data.length == 0 ){
        new admins({
          username:req.body.adname,
          password:req.body.adpass,
          isTotalAdmin:false,
          manage:req.body.adtrack
        }).save((err,data)=>{
          if(err)resp.send({status:"failed",reason:"database Error"})
          else resp.send({status:"success",reason:"operation success",data:data})
        })

      }else{
        resp.send({status:"failed",reason:"duplicate admin username or track name"})
      }
    })
})
.delete('/dashboard/totaladmin/trackadmin',(req,resp)=>{

    admins.find({username: req.body.adname}, {}, (err, data) => {
      if (!err && data.length !== 0) {
        admins.remove({"username": req.body.adname,"isTotalAdmin": false}, (err, res) => {
          if (!err) resp.send({status: "success",reason: "operation success",data: res})
          else resp.send({status: "failed",reason: "database error"})
        })
      }else{
        resp.send({status: "failed",reason: "Admin Not found"})
      }
    })

})
.get('/dashboard/totaladmin/trackadmin',(req,resp)=>{
    admins.find({"isTotalAdmin":false},{"_id":0,"username":1,"manage":1},(err,data)=>{
      if(!err){
        resp.send({status:"success",reason:"operation success", data:data})
      }else{
        resp.send({status:"failed",reason:"database error"})
      }
    })
})

module.exports = router;
