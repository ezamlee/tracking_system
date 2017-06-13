var mongoose=require("mongoose");
module.exports = mongoose.model('subjects', new mongoose.Schema({
    name:String
  })
);
