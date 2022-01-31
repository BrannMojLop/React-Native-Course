import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 2)}</Text>
    </View>
  );
};