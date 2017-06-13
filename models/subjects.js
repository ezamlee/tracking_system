var mongoose=require("mongoose");
module.exports = mongoose.model('subjects', new mongoose.Schema({
    code:String,
    track:String,
    name:String,
    cTime:Number,
    tTime:Number
  })
);
/*
  track:
  ,code:
  ,name:
  ,cTime:
  ,tTime:
*/
