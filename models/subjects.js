var mongoose=require("mongoose");
module.exports = mongoose.model('subjects', new mongoose.Schema({
    name:String
    ,code:{type:String , unique:true}
    ,track:String
    ,sessions : [Object]
  })
);
/*
{
  name     : "System Admin",
  code     : "OPGen1",
  track    : "Open Source",
  sessions :  [{ sTime: ,eTime:  ,date:  ,room:   },
               { sTime: ,eTime:  ,date:  ,Room:   }
              ]
}
*/
