import 'dotenv/config';

import axios from 'axios';
import { APP_KEY_HEADER, APP_TOKEN_HEADER } from '../constants/api-path-paymee';

const apiPayMee = axios.create({
  baseURL: process.env.PAYMEE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    [APP_KEY_HEADER]: process.env.PAYMEE_API_KEY,
    [APP_TOKEN_HEADER]: process.env.PAYMEE_API_SECRET,
  },
});

export { apiPayMee };
