import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import * as UseCases from '../../core/use-cases';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = (movieId:number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieEstado, setmovieEstado] = useState<FullMovie>()


  useEffect(() => {
    loadMovie();
    
  }, [movieId])

  const loadMovie = async () => {
    setIsLoading(true);
    const movie = await UseCases.movieGetByIdUseCase(movieDBFetcher,movieId);
    setmovieEstado(movie);
    setIsLoading(false);


  }
// render
  return {
    isLoading,
    movieEstado,
    //props
    
  }
}
