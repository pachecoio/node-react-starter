const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

// IMPORT MODELS
require('./models/Product');


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test-database`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()) // Use this after the variable declaration



//IMPORT ROUTES
require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});