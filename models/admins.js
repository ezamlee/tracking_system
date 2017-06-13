var mongoose=require("mongoose");
module.exports = mongoose.model('admins', new mongoose.Schema({
    username:String,
    password:String,
  })
);
