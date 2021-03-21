import axios from 'axios';
import url from './url';

export default {
  getAll: async () => {
    let res = await axios.get(url+`/api/product`);
    return res.data || [];
  }
}