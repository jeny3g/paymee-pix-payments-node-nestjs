import { PayMeeServiceRepository } from '@application/repositories/paymee-service-repository';
import {
  APP_KEY_HEADER,
  APP_TOKEN_HEADER,
} from '@shared/constants/api-path-paymee';
import axios, { AxiosInstance } from 'axios';

export class InMemoryPayMeeServiceRepository
  implements PayMeeServiceRepository
{
  api(): AxiosInstance {
    return axios.create({
      baseURL: process.env.PAYMEE_API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        [APP_KEY_HEADER]: process.env.PAYMEE_API_KEY_SANDBOX,
        [APP_TOKEN_HEADER]: process.env.PAYMEE_API_SECRET_SANDBOX,
      },
    });
  }
}
