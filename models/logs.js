var mongoose=require("mongoose");
module.exports = mongoose.model('logs', new mongoose.Schema({
    time:{ type: Date, default: Date.now }
    ,device:Number
    ,rssi:Number
    ,gateway:String
  })
);
