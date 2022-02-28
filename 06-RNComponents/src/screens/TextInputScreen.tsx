import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: colors.text,
            }}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: colors.text,
            }}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
          />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              color: colors.text,
              borderColor: colors.text,
            }}
            placeholder="Ingrese su telefono"
            keyboardType="number-pad"
            onChangeText={value => onChange(value, 'phone')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Subscribirme</Text>
          <CustomSwitch
            isOn={isSubscribed}
            onChange={value => onChange(!isSubscribed, 'isSubscribed')}
          />
        </View>
        <HeaderTitle title={JSON.stringify(form, null, 3)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
