const fs = require('fs');
const path = require('path');

function uploadFile(req, res) {
    const file = req.files.image; // Assuming the field name in the form is 'image'
    const uploadPath = path.join(__dirname, '../public/images/', file.name);

    file.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    });

    return `/images/${file.name}`;
}

module.exports = uploadFile;
