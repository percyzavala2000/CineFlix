import React from 'react';
import {View, Text} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';
type Props = {
  movies: Movie[];
  height?: number;
};
export const PosterCarousel = ({height = 440, movies}: Props) => {
  // render
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movies={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
