import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from './src/navigation/Navigation';
import {LogBox} from 'react-native';
import {ThemeProvider} from './src/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: 'string';
//     // background: 'string';
//     // card: 'string';
//     // text: 'string';
//     // border: 'string';
//     // notification: 'string';
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Reanimated 2',
]);

export default App;
