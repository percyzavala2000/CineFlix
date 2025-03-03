
import { AxiosAdapter } from './http/axios.adapter';
import { FetchAdapter } from './http/fech.adapter';

export const movieDBFetcher=new   AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ab8ed7d408763543df99341e3133a4af',
    language: 'es',
    
  },
  
})