const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
 
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  idOrganisation: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' , required: true },
  donAmount: { type: Number, required: true },
  donStatus: { type: Boolean, required: true }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
