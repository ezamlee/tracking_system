var mongoose=require("mongoose");
module.exports = mongoose.model('semsters', new mongoose.Schema({
    details :Object,
    track   :String,
    subjects:[Object]
  })
);
/*
  {
    details:{
      name  :
      ,sDate:{d:"1-31" ,m:"1-12", y:"YYYY" }
      ,eDate:{d:"1-31" ,m:"1-12", y:"YYYY" }
    }
    ,track:
    ,subjects:[
      {
        code:
        ,schedule:{
          rec:"W" or "M" or "Y"
          ,sessions:{
            date:{d: "1-7"} or {d:"1-31"} or {d:"1-31" , m:"1-12" }
            ,time:{
              from : {h: , m: }
              to   : {h: , m: }
            }
            ,loc:"String"
          }
        }
      }
    ]
  }
*/
