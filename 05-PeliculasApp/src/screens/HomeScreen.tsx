import React, {useContext} from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColores';
import {GradientContext} from '../context/GradientContext';
import {useEffect} from 'react';

const {width: windowWitdh} = Dimensions.get('window');

export const HomeScreen = () => {
  const {setMainColors} = useContext(GradientContext);

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="grey" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carrusel principal */}
          <View style={{height: 440, alignItems: 'center'}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWitdh}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              firstItem={1}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas populares, valoradas y estrenos */}
          <HorizontalSlider title="Más Populares" movies={popular} />
          <HorizontalSlider title="Mejor Valoradas" movies={topRated} />
          <HorizontalSlider title="Próximos Estrenos" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
