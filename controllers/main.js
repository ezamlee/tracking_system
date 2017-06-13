var express = require("express");
var router = express.Router();

router.get("/", (req,resp)=>{
  resp.send("<h1>Hello this is the server</h1>")
})

module.exports = router;
