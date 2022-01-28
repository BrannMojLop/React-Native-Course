import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  const drawerType = width >= 768 ? 'permanent' : 'front';
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{drawerType: drawerType}}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Contenedor de Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.udIfmXkDTzwuDF4YKPHBPgHaHk?w=214&h=218&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuBoton}>
          <Text style={styles.menuItem}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuBoton}>
          <Text style={styles.menuItem}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
