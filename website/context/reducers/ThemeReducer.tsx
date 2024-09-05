export type CommonAction = {
  type: 'SET_THEME';
  payload: { themeName: string };
};

export interface ThemeState {
  themes?: string;
}

export const initialState: ThemeState = {
  themes: 'light',
};

export const themeReducer = (
  state: ThemeState,
  action: CommonAction
): ThemeState => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        themes: action.payload.themeName,
      };
    default:
      return state;
  }
};
