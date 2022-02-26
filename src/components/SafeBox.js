import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {spacingChanger} from '../utils/utilFunctions';
import {ThemeContext} from '../config/Navigation';

const SafeBox = ({
  style,
  viewType = 'normal',
  spacing = {},
  backgroundColor,
  borderColor,
  ...rest
}) => {
  const {theme} = useContext(ThemeContext);
  // change the "m" and "xl" etc to numbers using the Theme
  spacingChanger(spacing);

  return (
    <SafeAreaView
      style={
        theme && {
          ...spacing,
          borderColor: theme.colors[borderColor],
          backgroundColor: theme.colors[backgroundColor],
          ...style,
        }
      }
      {...rest}
    />
  );
};

export default SafeBox;
