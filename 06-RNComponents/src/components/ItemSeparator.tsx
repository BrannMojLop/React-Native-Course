import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: dividerColor,
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 5,
      }}></View>
  );
};
