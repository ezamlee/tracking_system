var mongoose=require("mongoose");
module.exports = mongoose.model('tracks', new mongoose.Schema({
    name:String
  })
);
