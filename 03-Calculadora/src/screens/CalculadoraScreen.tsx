import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    armarNumero,
    btnDividir,
    btnDelete,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc color="#9B9B9B" value="C" action={limpiar} />
        <BotonCalc color="#9B9B9B" value="+/-" action={positivoNegativo} />
        <BotonCalc color="#9B9B9B" value="del" action={btnDelete} />
        <BotonCalc color="#FF9427" value="/" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc value="7" action={armarNumero} />
        <BotonCalc value="8" action={armarNumero} />
        <BotonCalc value="9" action={armarNumero} />
        <BotonCalc color="#FF9427" value="X" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc value="4" action={armarNumero} />
        <BotonCalc value="5" action={armarNumero} />
        <BotonCalc value="6" action={armarNumero} />
        <BotonCalc color="#FF9427" value="-" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc value="1" action={armarNumero} />
        <BotonCalc value="2" action={armarNumero} />
        <BotonCalc value="3" action={armarNumero} />
        <BotonCalc color="#FF9427" value="+" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc value="0" ancho action={armarNumero} />
        <BotonCalc value="." action={armarNumero} />
        <BotonCalc color="#FF9427" value="=" action={calcular} />
      </View>
    </View>
  );
};
