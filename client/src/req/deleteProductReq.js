import url from './url';
const axios = require('axios')

export default async (name)=>{
  await axios
    .post(url+`/api/product/remove`, {
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
