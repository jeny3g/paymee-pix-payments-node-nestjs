import { AxiosInstance } from 'axios';

export abstract class ApiServiceRepository {
  abstract api(): AxiosInstance;
}
