const express = require('express')
const dotenv = require('dotenv');
const homeEmployee = require('./routes/employee')
const mongoose = require('mongoose')

const app = express();
dotenv.config();

// env
const port = process.env.PORT;
const mongodbUri = process.env.MONGODB_URI;

// middleware
app.use(express.json());
app.use(express.static('public'));

// route
app.use('/', homeEmployee);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

// mongoose.connect(mongodbUri)
// .then(() => {
//   console.log('Connected mongodb');
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
//   });
// })
// .catch(() => console.log('Connect mongodb fail'))
