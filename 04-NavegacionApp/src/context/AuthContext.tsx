import React, {createContext} from 'react';
import {useReducer} from 'react';

// Definir como luce, o que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el contexto
export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente que es el proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(reducer, authInitialState);

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
