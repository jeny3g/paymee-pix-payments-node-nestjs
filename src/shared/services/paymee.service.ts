import { ApiServiceRepository } from '@application/repositories/api-service-repository';
import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import Request from 'express';
import { APP_KEY_HEADER, APP_TOKEN_HEADER } from '../constants/api-path-paymee';

@Injectable()
export class PayMeeService implements ApiServiceRepository {
  private apiKey: string;
  private apiToken: string;

  constructor(@Inject(Request) req: Request) {
    console.log(req);
    const apiKey = req.headers['x-api-key'];
    const apiToken = req.headers['x-api-token'];

    this.apiKey = apiKey;
    this.apiToken = apiToken;
  }

  public api(): AxiosInstance {
    return axios.create({
      baseURL: process.env.PAYMEE_API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        [APP_KEY_HEADER]: this.apiKey,
        [APP_TOKEN_HEADER]: this.apiToken,
      },
    });
  }
}
