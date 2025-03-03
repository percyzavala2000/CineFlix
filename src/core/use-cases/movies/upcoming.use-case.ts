import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastructure/mapper/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const movieUpComingUseCase = async(fetcher:HttpAdapter):Promise<Movie[]> => {
  try {
    const upComing = await fetcher.get<NowPlayingResponse>('/upcoming');
   
    return upComing.results.map(result=>MovieMapper.fromMovieDBResultToMovieEntity(result));
  } catch (error) {
    throw new Error(`error fetching upcoming movies ${error}`);
  }
}