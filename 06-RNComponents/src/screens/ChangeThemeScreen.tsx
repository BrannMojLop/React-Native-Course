import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
