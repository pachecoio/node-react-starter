const axios = require('axios')
const endPoint = 'http://localhost:5000/api/product';

axios
  .post(endPoint, {
    "name": "Platic",
    "description": "Super thin product."
  })
  .then(res => {
    console.log("Success.");
    // console.log(res)
  })
  .catch(error => {
    console.error(error)
  })