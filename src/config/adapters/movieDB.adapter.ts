
import { THE_MOVIE_DB_API_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';
import { FetchAdapter } from './http/fech.adapter';

export const movieDBFetcher=new   AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: THE_MOVIE_DB_API_KEY ?? 'no-key',
    language: 'es',
    
  },
  
})