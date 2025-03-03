import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { Movie } from '../../entities/movie.entity';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastructure/mapper/movie.mapper';

export const moviesNowPlayingUseCase= async (fetcher: HttpAdapter):Promise<Movie[]>=> {

  try {
    const nowPlaying=await fetcher.get<NowPlayingResponse>('/now_playing');
    console.log(nowPlaying)
    return nowPlaying.results.map(result=>MovieMapper.fromMovieDBResultToMovieEntity(result));
    
  } catch (error) {
    console.log(error)
    throw new Error(`error fetching now playing movies ${error}`);
    
  }

  
}