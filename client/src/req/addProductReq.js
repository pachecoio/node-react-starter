import url from './url';
const axios = require('axios')

export default async (name, desc)=>{
  await axios
    .post(url+`/api/product/add`, {
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
