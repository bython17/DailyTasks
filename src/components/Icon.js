import React, {useContext} from 'react';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../config/Navigation';

const Icon = ({style, name, color, variant = 'regular', ...rest}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <RNIcon
      style={{...style}}
      name={name}
      size={theme.textVariant[variant].fontSize}
      color={theme.colors[color]}
      {...rest}
    />
  );
};

export default Icon;
