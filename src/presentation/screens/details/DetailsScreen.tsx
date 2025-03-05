import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParams } from '../../navigation/StackNavigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Deatils'>{}


export const DetailsScreen = ({route}:Props) => {
  // const {movieId}=useRoute().params;
  const {movieId}=route.params;
  const {movieEstado,isLoading,cast=[]}=useMovie(movieId);
  if(isLoading){
    return(<Text>Loading...</Text>)
  }

// render
  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader movie={movieEstado! } />
      {/* Deatils */}
      <MovieDetails movie={movieEstado!} cast={cast} />
    </ScrollView>
  )
}
