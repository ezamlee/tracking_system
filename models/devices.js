var mongoose=require("mongoose");
module.exports = mongoose.model('devices', new mongoose.Schema({
    _id:{type:Number,unique: true}
    ,reg:Object
    ,subs:[String]
  })
);
/*
  {
    _id:phone IMEI
    ,reg:{
      name:"full student name"
      ,email:"someone@somewhere.com"
      ,hp:"XXX XX XXXX XXXX"
    }
    ,subs:["code","code"]
}
*/
