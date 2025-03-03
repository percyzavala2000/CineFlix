import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';

type Options = {
  baseURL: string;
  params: Record<string, string>;
};

export class AxiosAdapter extends HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    super();
    this.axiosInstance = axios.create({
      baseURL: options.baseURL,
      params: options.params,
    });
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const {data} = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`error fetching get:${url} ${error}`);
    }
  }
}
