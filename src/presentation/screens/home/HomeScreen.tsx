import React from 'react'
import { View, Text } from 'react-native'
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const{top}=useSafeAreaInsets();
  const { isLoading,nowPlaying ,popular,topRated,upComing,popularNextPage} = useMovies();
  if(isLoading){
    return(<Text>Loading...</Text> )
  }
// render
  return (
    <ScrollView>
      <View style={{marginTop:top+20,paddingBottom:30}}>
        {/* principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Populares */}
        <HorizontalCarousel movies={popular} title='Populares' loadNextPage={popularNextPage} />
        {/* Top_Rated */}
        <HorizontalCarousel movies={topRated} title='Mejor Calificadas' />
        {/* Populares */}
        <HorizontalCarousel movies={upComing} title='Proximamente' />
      </View>
    </ScrollView>
  )
}
