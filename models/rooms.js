var mongoose=require("mongoose");
module.exports = mongoose.model('logs', new mongoose.Schema({
    room:[String]
  })
)
