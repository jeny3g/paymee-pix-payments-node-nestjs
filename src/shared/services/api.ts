import 'dotenv/config';

import axios from 'axios';
import { APP_KEY_HEADER, APP_TOKEN_HEADER } from '../constants/api-path-paymee';

type PayMeeHeaders = {
  apiKey: string;
  apiToken: string;
};

const apiPayMeeProduction = (headers: PayMeeHeaders) => {
  return axios.create({
    baseURL: process.env.PAYMEE_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      [APP_KEY_HEADER]: headers.apiKey,
      [APP_TOKEN_HEADER]: headers.apiToken,
    },
  });
};

const apiPayMeeSandbox = (headers: PayMeeHeaders) => {
  return axios.create({
    baseURL: process.env.PAYMEE_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      [APP_KEY_HEADER]: process.env.PAYMEE_API_KEY_SANDBOX,
      [APP_TOKEN_HEADER]: process.env.PAYMEE_API_SECRET_SANDBOX,
    },
  });
};

export { apiPayMeeSandbox, apiPayMeeProduction };
