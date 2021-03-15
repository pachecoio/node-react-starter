const axios = require('axios')
const endPoint = 'http://localhost:5000/api/product/remove';

export default async (name)=>{
  await axios
    .post(endPoint, {
      "name": name,
    })
    .then(res => {
      console.log("Success.");
      // console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
}
