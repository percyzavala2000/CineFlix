import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import {Cast} from '../../../core/entities/cas.entity';
import { CastActor } from '../cast/CastActor';

type MovieDetailsProps = {
  movie: FullMovie;
  cast: Cast[];
};

export const MovieDetails = ({movie, cast}: MovieDetailsProps) => {
  // render
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}>{movie.genres.join(', ')}</Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Resumen
        </Text>
        <Text style={{fontSize: 16, textAlign: 'justify'}}>
          {movie.description}
        </Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
          {Formatter.formatCurrency(movie.budget)}
        </Text>
      </View>

      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          Reparto
        </Text>
        <FlatList data={cast} keyExtractor={(item)=>item.id.toString()   } horizontal showsHorizontalScrollIndicator renderItem={
          ({item})=>(
            <CastActor actor={item} />
          )
        } />
      </View>
    </>
  );
};
