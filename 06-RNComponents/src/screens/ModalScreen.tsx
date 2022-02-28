import React, {useContext, useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    theme: {colors, backgroundModal},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Contenido del Modal */}
          <View
            style={{
              backgroundColor: backgroundModal,
              borderWidth: 1,
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{color: colors.text, fontSize: 25, fontWeight: 'bold'}}>
              Modal
            </Text>
            <Text
              style={{
                color: colors.text,
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 20,
              }}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
