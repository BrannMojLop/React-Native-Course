import React from 'react';
import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1 Screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="aperture-outline" />
      <TouchableIcon iconName="at" />
      <TouchableIcon iconName="boat" />
      <TouchableIcon iconName="basketball" />
      <TouchableIcon iconName="beer" />
      <TouchableIcon iconName="desktop" />
    </View>
  );
};
