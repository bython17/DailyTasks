import {useContext} from 'react';
import {ThemeContext} from '../config/Navigation';

const useTheme = () => {
  const {theme} = useContext(ThemeContext);
  return theme;
};

export default useTheme;
