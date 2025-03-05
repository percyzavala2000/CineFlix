import React from 'react'
import { View, Text, Image } from 'react-native'
import { Cast } from '../../../core/entities/cas.entity';

type CastActorProps = {
  actor:Cast;
}

export const CastActor = ({actor}:CastActorProps) => {
// render
  return (
    <View style={{alignItems: 'center', marginHorizontal: 8}}>
              <Image
                source={{uri: actor.avatar}}
                style={{width: 100, height: 150, borderRadius: 10}}
              />
              <Text style={{textAlign: 'center', fontSize: 16, marginTop: 5}}>
                {actor.name}
              </Text>
              <Text style={{textAlign: 'center', fontSize: 14, color: 'gray'}}>
                {actor.character}
              </Text>
            </View>
  )
}
