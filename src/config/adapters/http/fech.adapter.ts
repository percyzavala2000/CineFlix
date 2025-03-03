import { HttpAdapter } from './http.adapter';


type Options = {  
  baseURL: string;
  params: Record<string, string>;
};

export class FetchAdapter extends HttpAdapter {
  private baseURL: string;
  private params: Record<string, string>;

  constructor(options: Options) {
    super();
    this.baseURL = options.baseURL;
    this.params = options.params;
  }
  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    const urlWithParams = new URL(url, this.baseURL);
    Object.entries(this.params).forEach(([key, value]) => {
      urlWithParams.searchParams.append(key, value);
    });
    try {
      const response = await fetch(urlWithParams.toString(), options);
      const data = await response.json();
      console.log('desde fetch.adapter',data)
      return data;
    } catch (error) {
      throw new Error(`error fetching get:${url} ${error}`);
    }
  }


 
}