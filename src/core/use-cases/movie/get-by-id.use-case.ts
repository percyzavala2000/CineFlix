import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastructure/mapper/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const movieGetByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {

  try {
    //fecher
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    const fullMovie=MovieMapper.fromMovieDBToEntity(movie);
    
    return fullMovie;
    //mapeo
    
  } catch (error) {
    throw new Error(`error fetching movie by id ${error}`);
  }
};
