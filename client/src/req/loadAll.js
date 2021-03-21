import axios from "axios";
import url from "./url";

const d = async () => {
  let res = await axios.get(url + `/api/product`);
  console.log(res);
  return res.data;
};
export default d;
