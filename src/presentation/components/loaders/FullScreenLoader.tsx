import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export const FullScreenLoader = () => {
// render
  return (
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}
