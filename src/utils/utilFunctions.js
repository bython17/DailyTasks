import {darkTheme, lightTheme} from '../constants/theme';

export const spacingChanger = spacingObj => {
  for (i in spacingObj) {
    spacingObj[i] = lightTheme.spacing[spacingObj[i]];
  }
  return spacingObj;
};

export const colorChanger = (color, theme) => {
  return theme.data.theme === 'light'
    ? lightTheme.colors[color]
    : darkTheme.colors[color];
};
