var mongoose=require("mongoose");
module.exports = mongoose.model('lectures', new mongoose.Schema({
    cred : Object,
    subj : [String]
  })
);
/*
{
  cred : {uname:"ahmed",pass:"secretpass"},
  subj : ["subject Code" , "Subject code"]
}

*/
