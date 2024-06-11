const express = require('express');
const router = express.Router();
const organisationController = require("../controllers/organisationController");
const upload = require('../middleware/multer-config'); // Assuming multerConfig.js contains your multer setup

// Routes for User CRUD operations

//router.post('/organisation', upload.single('organisationPic'), organisationController.createOrganisation);
router.post('/organisation', upload, organisationController.createOrganisation);




module.exports = router; 