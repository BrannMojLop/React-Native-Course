import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {MenuItem} from '../interfaces/appInterfaces';
import {styles} from '../theme/appTheme';

const menuItems = [
  {
    name: 'Animaciones 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animaciones 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const renderListHeader = () => {
    return (
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View
        style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 5}}></View>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
