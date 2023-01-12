import { PayMeeServiceRepository } from '@application/repositories/paymee-service-repository';
import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import {
  APP_KEY_HEADER,
  APP_TOKEN_HEADER,
} from '@shared/constants/api-path-paymee';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class PayMeeService implements PayMeeServiceRepository {
  constructor(@Inject(REQUEST) private request: Request) {}

  public api(): AxiosInstance {
    const apiKey = this.request.headers['x-api-key'];
    const apiToken = this.request.headers['x-api-token'];

    return axios.create({
      baseURL: process.env.PAYMEE_API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        [APP_KEY_HEADER]: apiKey || process.env.PAYMEE_API_KEY_SANDBOX,
        [APP_TOKEN_HEADER]: apiToken || process.env.PAYMEE_API_SECRET_SANDBOX,
      },
    });
  }
}
