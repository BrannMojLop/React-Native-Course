import React, {createContext} from 'react';
import {useReducer} from 'react';
import {authReducer} from './AuthReducer';

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
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUsername: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente que es el proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const singIn = () => {
    dispatch({type: 'singIn'});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        changeFavoriteIcon,
        logout,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
