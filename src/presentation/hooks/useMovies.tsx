import React, {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  useEffect(() => {
    initialLoad();
  }, []);
  const initialLoad = async () => {
    const [nowPlayingMovies, upComingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        UseCases.moviesNowPlayingUseCase(movieDBFetcher),
        UseCases.movieUpComingUseCase(movieDBFetcher),
        UseCases.movieTopRatedUseCase(movieDBFetcher),
        UseCases.moviePopularUseCase(movieDBFetcher),
      ]);
    setNowPlaying(nowPlayingMovies);
    setUpComing(upComingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    upComing,
    topRated,
    popular,
  };
};
