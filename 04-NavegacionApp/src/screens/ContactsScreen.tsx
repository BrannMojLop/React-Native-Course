import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {
    singIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>
      {!isLoggedIn && <Button title="SingIn" onPress={singIn} />}
    </View>
  );
};
