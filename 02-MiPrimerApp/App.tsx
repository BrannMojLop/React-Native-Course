import React from 'react';
import {ContadorScreen} from './src/screens/ContadorScreen';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {PositionScrenn} from './src/screens/PositionScrenn';
import {FlexScreen} from './src/screens/FlexScreen';
import {TareaScreen} from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScrenn /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};
