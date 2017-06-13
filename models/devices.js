var mongoose=require("mongoose");
module.exports = mongoose.model('devices', new mongoose.Schema({
    beaconID:{type:String,unique: true}
    ,reg:Object
    ,subs:[String]
    ,track:String
  })
);
/*
  {
    beaconID:"beacon ID"
    ,reg:{
      name:"full student name"
      ,email:"someone@somewhere.com"
      ,hp:"XXX XX XXXX XXXX"
    }
    ,subs:["code","code"]
    ,track: "track name"
}
*/
