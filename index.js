const express = require('express');
const mongoose = require('mongoose');
const { key } = require('./mongo.config');

// IMPORT MODELS
require('./models/Product');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// importing routes
require('./routes/routes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`)
});