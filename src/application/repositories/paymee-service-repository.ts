import { AxiosInstance } from 'axios';

export abstract class PayMeeServiceRepository {
  abstract api(): AxiosInstance;
}
