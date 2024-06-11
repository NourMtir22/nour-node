const express = require('express');
const router = express.Router();
const organisationController = require('../controllers/organisationController');
const fileUpload = require('express-fileupload'); // Add this package for file uploads

router.use(fileUpload());

router.post('/organisation', organisationController.createOrganisation);

module.exports = router;
