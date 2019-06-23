import axios from 'axios';
import secret from '../secrets';

export default axios.create({
  baseURL: secret.API_URL
});