var mongoose=require("mongoose");
module.exports = mongoose.model('subjects', new mongoose.Schema({
    code:String
    ,did:Number
    ,alevel:Number
    ,action:Boolean
    ,exec  :Boolean
  })
);
