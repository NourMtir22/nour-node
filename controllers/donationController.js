const Donation = require('../models/Donnation');

module.exports = {
    async createDonation(req, res) {
        try {
            const donationData = req.body;
            const newDonation = new Donation(donationData);
            await newDonation.save();
            res.status(201).json(newDonation); //success
        } catch (error) {
           
                res.status(500).json({ message: 'Server error' });
            
        }
    },

    async getDonation(req, res) {
        try {
            const { userId, organisationId } = req.params;
            const donations = await Donation.find({ idUser: userId, idOrganisation: organisationId });
            res.status(202).json(donations);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

}; 