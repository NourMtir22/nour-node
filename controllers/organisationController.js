const Organisation = require('../models/Organisation');
const multer = require('multer');
const path = require('path');
module.exports = {
    async createOrganisation(req, res) {
  
        try {
            const organisationData = req.body;
            // Check if there's a file and set the organisationPic field
            if (req.file) {
                organisationData.organisationPic = `http://127.0.0.1:3000/images/${req.file.filename}`;
            }
            const newOrganisation = new Organisation(organisationData);
            await newOrganisation.save();
            res.status(201).json(newOrganisation); //success
        } catch (error) {
           
            if (error.name === 'ValidationError') {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Server error' });
            }
            
        }
    },



}; 