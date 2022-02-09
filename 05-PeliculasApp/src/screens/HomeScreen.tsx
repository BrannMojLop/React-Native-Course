import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWitdh} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Carrusel principal */}
        <View style={{height: 450, alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>En Cartelera</Text>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWitdh}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            firstItem={1}
          />
        </View>

        {/* Peliculas populares, valoradas y estrenos */}
        <HorizontalSlider title="Más Populares" movies={popular} />
        <HorizontalSlider title="Mejor Valoradas" movies={topRated} />
        <HorizontalSlider title="Próximos Estrenos" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
