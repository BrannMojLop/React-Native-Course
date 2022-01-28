import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
// import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateral} from './src/navigator/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral />
      {/* <MenuLateralBasico /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Reanimated 2',
]);

export default App;
