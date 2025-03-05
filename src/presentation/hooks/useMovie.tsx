import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import * as UseCases from '../../core/use-cases';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cas.entity';

export const useMovie = (movieId:number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieEstado, setmovieEstado] = useState<FullMovie>()
  const [cast, setCast] = useState<Cast[]>()


  useEffect(() => {
    loadMovie();
    
  }, [movieId])

  const loadMovie = async () => {
    setIsLoading(true);
    
    const [movie,CastMovie ]= await Promise.all([
      UseCases.movieGetByIdUseCase(movieDBFetcher,movieId),
      UseCases.movieGetCastUseCase(movieDBFetcher,movieId),
    ]);

    setmovieEstado(movie);
    setCast(CastMovie);
    
    setIsLoading(false);
    console.log({cast})


  }
// render
  return {
    isLoading,
    movieEstado,
    cast,
    //props
    
  }
}
