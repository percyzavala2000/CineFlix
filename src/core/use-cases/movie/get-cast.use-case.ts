import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBCastResponse } from '../../../infrastructure/interfaces/movie-db.response';
import { CastMapper } from '../../../infrastructure/mapper/cast.mapper';
import { Cast } from '../../entities/cas.entity';

export const movieGetCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast}= await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
    const actors=cast.map(actor=>CastMapper.fromCastDBToEntity(actor));
    return actors;
  } catch (error) {
    throw new Error(`error fetching movie cast ${error}`);
  }
}
