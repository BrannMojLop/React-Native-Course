import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import {useEffect} from 'react';

const {width} = Dimensions.get('window');

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('gray');
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {fallback: 'gray'}).then(colors => {
      if (!isMounted.current) return;

      switch (colors.platform) {
        case 'android':
          setBgColor(colors.dominant || 'gray');
          break;
        default:
          throw new Error('Unexpected platform key');
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <View>
      <TouchableOpacity activeOpacity={0.9}>
        <View
          style={{
            ...styles.cardContainer,
            width: width * 0.4,
            backgroundColor: bgColor,
          }}>
          {/* Nombre del pokemon y ID */}
          <View>
            <Text style={styles.name}>
              {pokemon.name}
              {'\n#' + pokemon.id}
            </Text>
          </View>
          <View style={styles.pokebolaContainer}>
            <Image
              source={require('../assets/pokebola-blanca.png')}
              style={styles.pokebola}
            />
          </View>
          <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 100,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
});
