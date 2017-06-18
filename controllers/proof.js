var express = require("express");
var router  = express.Router();
var log     = require("../models/logs.js");


router.get('/',(req,resp)=>{
  resp.render("proof/proof.ejs",{title:"proof ofconcept"})
})



module.exports = router;
