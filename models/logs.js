var mongoose=require("mongoose");
module.exports = mongoose.model('logs', new mongoose.Schema({
    time:{ type: Date, default: Date.now }
    ,device:String
    ,rssi:Number
    ,gateway:String
  })
);
