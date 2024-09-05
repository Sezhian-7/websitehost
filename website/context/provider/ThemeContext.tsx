import { createContext, useReducer } from 'react';

import {
  CommonAction,
  themeReducer,
  ThemeState,
  initialState,
} from '../reducers/ThemeReducer';

type ThemeContextProps = {
  themes: ThemeState;
  themeDispatch: React.Dispatch<CommonAction>;
};

export const ThemeContext = createContext<ThemeContextProps>({
  themes: initialState,
  themeDispatch: (_params: any) => initialState,
});

export function ThemeContextProvider(props: React.PropsWithChildren<{}>) {
  const [themes, themeDispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ themes, themeDispatch }} {...props} />;
}
