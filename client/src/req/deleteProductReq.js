import url from "./url";
const axios = require("axios");

const d = async (name) => {
  await axios
    .post(url + `/api/product/remove`, {
      name: name,
    })
    .then((res) => {
      console.log("Success.");
      // console.log(res)
    })
    .catch((error) => {
      console.error(error);
    });
};
export default d;
