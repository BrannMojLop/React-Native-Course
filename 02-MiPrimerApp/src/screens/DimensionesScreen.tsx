import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

export const DimensionesScreen = () => {
  //   const {width, height} = Dimensions.get('window');

  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
      {/* <Text>Dimensiones Screen</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
