const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
        try {
            const userData = req.body;
            const newUser = new User(userData);
            await newUser.save();
            res.status(201).json(newUser); //success
        } catch (error) {
            if (error.name === 'ValidationError') {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Server error' });
            }
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(202).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    },

    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(202).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    },

    // async updateUser(req, res) {
    //     try {
    //         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //         if (!updatedUser) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         res.status(200).json(updatedUser);
    //     } catch (error) {
    //         res.status(400).json({ message: error.message });
    //     }
    // },

    // async deleteUser(req, res) {
    //     try {
    //         const deletedUser = await User.findByIdAndDelete(req.params.id);
    //         if (!deletedUser) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         res.status(200).json({ message: 'User deleted successfully' });
    //     } catch (error) {
    //         res.status(400).json({ message: error.message });
    //     }
    // }
  }; 
    
