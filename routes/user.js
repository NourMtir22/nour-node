const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// Routes for User CRUD operations
router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
//router.put('/updateUser/:id', userController.updateUser);
//router.delete('/deleteUser/:id', userController.deleteUser);


module.exports = router; 