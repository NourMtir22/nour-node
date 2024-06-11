const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

// Routes for User CRUD operations
router.post('/donnation', donationController.createDonation);
router.post('/donnation/:userId/:organisationId', donationController.getDonation);

module.exports = router; 