const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organisationSchema = new Schema({
  organisationName: {
    type: String,
    minlength: 5,
    required: true,
  },
  password: {
    type: String,
    minlength: 14,

    required: true,
  },
  OrganisationPic: {
    type: String,
   required: true,
  },
  totalDonation: {
    type: Number,
    required: true,
    //unique: true,
  },
  

});
module.exports = mongoose.model("Organisation", organisationSchema);
