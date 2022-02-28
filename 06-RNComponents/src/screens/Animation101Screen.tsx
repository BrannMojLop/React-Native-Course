import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, fadeIn, fadeOut, position, startMovingPosition} =
    useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          backgroundColor: colors.primary,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}></Animated.View>

      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
