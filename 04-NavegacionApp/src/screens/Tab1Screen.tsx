import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1 Screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="airplane-outline" size={80} color="#900" />
      <Icon name="aperture-outline" size={80} color="#900" />
    </View>
  );
};
