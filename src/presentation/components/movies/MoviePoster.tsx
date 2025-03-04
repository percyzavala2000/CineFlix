import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigation';

type Props = {
  movies: Movie;
  height?: number;
  width?: number;
};

export const MoviePoster = ({movies, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  // render
  return (
    <Pressable
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: 4,
        paddingBottom: 20,
        paddingHorizontal: 7,
        opacity: pressed ? 0.7 : 1,
      })}
      onPress={() => navigation.navigate('Deatils', {movieId: movies.id})}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: movies.poster}} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
  },
});
