import React, {useContext} from 'react';
import Text from './Text';
import {TouchableOpacity} from 'react-native';
import {spacingChanger} from '../utils/utilFunctions';
import {ThemeContext} from '../config/Navigation';

const Button = ({
  style,
  width,
  spacing,
  variant,
  text,
  onPress,
  backgroundColor,
  noSpacing,
  ...rest
}) => {
  const {theme} = useContext(ThemeContext);
  spacingChanger(spacing);

  return (
    <TouchableOpacity
      style={{
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: !noSpacing ? theme.spacing.bh : 0,
        paddingHorizontal: !noSpacing ? theme.spacing.bw : 0,
        backgroundColor: theme.colors[backgroundColor],
        borderRadius: theme.borderRadius,
        ...spacing,
        ...style,
      }}
      onPress={onPress}
      {...rest}>
      <Text variant={variant} color="background">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
