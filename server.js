const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const { notFoundError, errorHandler } = require('./middleware/error-handler');
const upload = require('./middleware/multer-config'); // Import the multer configuration
const mongoose = require('mongoose');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // for handling form data
app.use(bodyParser.json());
app.use(cors());



const uri = "mongodb://localhost:27017/savePalestine" ;

const userRouter = require('./routes/user');
const donationRouter = require('./routes/donation');
const organisationRouter = require('./routes/organisation');




app.get('/', function (req, res) {
  res.send('Hello World')
})
// Route to handle logo upload
app.post('/upload-logo', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      return res.status(400).json({ message: err.message });
    } else if (err) {
      // An unknown error occurred when uploading
      return res.status(400).json({ message: err.message });
    }
    // Everything went fine
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
  });
});

app.listen(3000)
app.use('/api', organisationRouter);

app.use('/api', donationRouter);

app.use('/api', userRouter);


//error handling
app.use(notFoundError);
app.use(errorHandler);


// Connect to MongoDB
var configDB = require('./database/mongodb.json');

// mongoose.connect(configDB.mongo.uri);
mongoose.connect(uri)
.then(() => console.log('Mongodb Connected!'));
module.exports = app;