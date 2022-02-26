import React, {useContext} from 'react';
import {View} from 'react-native';
import {spacingChanger} from '../utils/utilFunctions';
import {ThemeContext} from '../config/Navigation';

const Box = ({
  style,
  viewType = 'normal',
  spacing,
  backgroundColor,
  borderColor,
  ...rest
}) => {
  const {theme} = useContext(ThemeContext);
  // change the "m" and "xl" etc to numbers using the Theme
  spacingChanger(spacing);

  return (
    <View
      style={{
        ...spacing,
        borderColor: theme.colors[borderColor],
        backgroundColor: theme.colors[backgroundColor],
        ...style,
      }}
      {...rest}
    />
  );
};

export default Box;
