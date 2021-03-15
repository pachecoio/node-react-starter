const axios = require('axios')
const endPoint = 'http://localhost:5000/api/product/add';

export default async (name, desc)=>{
  await axios
    .post(endPoint, {
      "name": name,
      "description": desc,
    })
    .then(res => {
      console.log("Success.");
      // console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
}
