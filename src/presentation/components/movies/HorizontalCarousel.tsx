import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {MoviePoster} from './MoviePoster';

type Props = {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
  // props
};

export const HorizontalCarousel = ({movies, title, loadNextPage}: Props) => {
 const isLoading=useRef(false);

 useEffect(() => {
  setTimeout(() => {
    isLoading.current=false;
  },200);
    

  
 }, [movies])

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current){
      return
    }

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    console.log({contentOffset, layoutMeasurement, contentSize});
    const isEndReached =
      layoutMeasurement.width + contentOffset.x + 600 >= contentSize.width;
    if (!isEndReached) {
      return;
    }
    isLoading.current=true;
    //cargar las siguientes peliculas
    loadNextPage && loadNextPage();
  };

  // render
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movies={item} width={140} height={200} />
        )}
        keyExtractor={(item,index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
      />
    </View>
  );
};
