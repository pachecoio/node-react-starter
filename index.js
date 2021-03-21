const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

// import all schemas
require('./models/Product');

const app = express();
mongoose.Promise = global.Promise;
const {key} = require("./mongo.config");

mongoose.connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    useFindAndModify: false,
    useCreateIndex: true
});
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.user(cors({credentials: true, origin: true})); // Use this after the variable declaration

//IMPORT ROUTES
require('./routes/routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});