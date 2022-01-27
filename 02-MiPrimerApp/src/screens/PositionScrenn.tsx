import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const PositionScrenn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
      <View style={styles.cajaRed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  cajaRed: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
