const multer = require('multer');
const path = require('path');

// Acceptable file extensions
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

const storage = multer.diskStorage({
  // Set storage destination
  destination: (req, file, callback) => {
    const __dirname = path.dirname(__filename); // Get the current directory path
    callback(null, path.join(__dirname, '../public/images')); // Set the storage directory
  },
  // Configure the filename
  filename: (req, file, callback) => {
    // Replace spaces with underscores in the filename
    const name = file.originalname.split(' ').join('_');
    // Get the file extension
    const extension = MIME_TYPES[file.mimetype];
    // Add a timestamp to the filename
    callback(null, name + Date.now() + '.' + extension);
  },
});

// Set maximum file size (10MB)
const upload = multer({ storage, limits: { fileSize: 10 * 1080 * 1080 } }).single('image'); // The file is sent in the body with the key 'image'

module.exports = upload;
