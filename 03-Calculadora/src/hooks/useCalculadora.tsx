import {useState, useRef} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const btnDelete = () => {
    if (numero.length === 2) {
      if (numero.includes('-')) {
        setNumero('0');
      } else {
        const newNumero = numero.slice(0, -1);
        setNumero(newNumero);
      }
    } else if (numero.length === 1) {
      setNumero('0');
    } else {
      const newNumero = numero.slice(0, -1);
      setNumero(newNumero);
    }
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //Evaluar si es otro cero y hay un punto.
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        // Evaluar si es diferente de 0 y no tiene un 0
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        // Evitar el 0000.0
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero !== '0') {
      if (numero.endsWith('.')) {
        setNumeroAnterior(numero.slice(0, -1));
      }
      setNumeroAnterior(numero);
      setNumero('0');
    }
  };

  const btnDividir = () => {
    if (numeroAnterior !== '0') {
      calcular();
    } else {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.dividir;
    }
  };

  const btnMultiplicar = () => {
    if (numeroAnterior !== '0') {
      calcular();
    } else {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.multiplicar;
    }
  };

  const btnRestar = () => {
    if (numeroAnterior !== '0') {
      calcular();
    } else {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.restar;
    }
  };

  const btnSumar = () => {
    if (numeroAnterior !== '0') {
      calcular();
    } else {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.sumar;
    }
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }

    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    limpiar,
    btnDelete,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular,
    positivoNegativo,
    armarNumero,
  };
};
