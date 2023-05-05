const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  resume: String
});

const User = mongoose.model('User', userSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

app.post('/signup', upload.single('resume'), async (req, res) => {
  const { name, email, location } = req.body;
  const resumePath = req.file.path;

  const user = new User({
    name: name,
    email: email,
    location: location,
    resume: resumePath
  });

  try {
    await user.save();
    res.status(200).send('User saved successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error saving user');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
