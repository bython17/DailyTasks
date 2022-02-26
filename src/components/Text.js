import React, {useContext} from 'react';
import {Text as RNText} from 'react-native';
import {spacingChanger} from '../utils/utilFunctions';
import {ThemeContext} from '../config/Navigation';

const Text = ({
  style = {},
  spacing,
  variant = 'regular',
  color = 'foreground',
  ...rest
}) => {
  const {theme} = useContext(ThemeContext);
  spacingChanger(spacing);

  return (
    <RNText
      style={
        theme && {
          color: theme.colors[color],
          ...spacing,
          ...theme.textVariant[variant],
          ...style,
        }
      }
      {...rest}
    />
  );
};

export default Text;
