import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mapper/movie.mapper';
import {Movie} from '../../entities/movie.entity';

type Options = {
  page?: number;
  limit?: number;
};

export const moviePopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<NowPlayingResponse>('/popular', {
      params: {page: options?.page ?? 1},
    });

    return popular.results.map(result =>
      MovieMapper.fromMovieDBResultToMovieEntity(result),
    );
  } catch (error) {
    throw new Error(`error fetching upcoming movies ${error}`);
  }
};
