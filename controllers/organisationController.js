const Organisation = require('../models/Organisation');
const uploadFile = require('../middleware/uploadFile'); // Ensure this path is correct

module.exports = {
    async createOrganisation(req, res) {
        try {
            const { organisationName, password, totalDonation } = req.body;

            // Validate constraints
            if (organisationName.length < 5) {
                return res.status(400).json({ message: "organisationName must be at least 5 characters long." });
            }
            if (password.length < 14) {
                return res.status(400).json({ message: "Password must be at least 14 characters long." });
            }

            let organisationPic = '';
            if (req.files && req.files.image) {
                organisationPic = `http://127.0.0.1:3000${uploadFile(req, res)}`;
            }

            const organisationData = {
                organisationName,
                password,
                totalDonation: parseInt(totalDonation),
                organisationPic
            };

            const newOrganisation = new Organisation(organisationData);
            await newOrganisation.save();
            res.status(201).json(newOrganisation); // success
        } catch (error) {
            if (error.name === 'ValidationError') {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Server error' });
            }
        }
    }
};
