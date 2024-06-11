const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    //contraintes
    minlength: 5,
    maxlength: 15
  },
 
  email:{
    type: String,

  },

  password: {
    type: String,
        //contraintes
    minlength: 5,
    maxlength: 15
  },

  /*isActive: {
    type: Boolean,
    default: true,
  },*/
  telephone: {
    type: Number,
    required: true,
    //compose de 8
    match: /^[0-9]{8}$/

  },
     // if u want to create a relationship between user and comments 

  // comments: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Comment'
  // }]
});
module.exports = mongoose.model("User", userSchema);
