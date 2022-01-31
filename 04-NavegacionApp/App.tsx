import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
// import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateral} from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
        {/* <MenuLateralBasico /> */}
        {/* <StackNavigator /> */}
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Reanimated 2',
]);

export default App;
