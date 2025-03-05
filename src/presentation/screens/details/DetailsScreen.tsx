import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParams } from '../../navigation/StackNavigation';
import { useMovie } from '../../hooks/useMovie';

interface Props extends StackScreenProps<RootStackParams, 'Deatils'>{}


export const DetailsScreen = ({route}:Props) => {
  // const {movieId}=useRoute().params;
  const {movieId}=route.params;
  const {isLoading}=useMovie(movieId);

// render
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}
