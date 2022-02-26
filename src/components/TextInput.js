import React, {useContext} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {ThemeContext} from '../config/Navigation';

const TextInput = ({
  style,
  color = 'foreground',
  width,
  variant,
  borderColor,
  ...rest
}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <RNTextInput
      style={{
        color: theme.colors[color],
        width: width,
        borderRadius: theme.borderRadius,
        paddingVertical: theme.spacing.bh - 2,
        paddingHorizontal: theme.spacing.bw - 2,
        borderColor: theme.colors[borderColor],
        borderWidth: 2,
        ...theme.textVariant[variant],
        ...style,
      }}
      {...rest}
      placeholderTextColor={theme.colors.input}></RNTextInput>
  );
};

export default TextInput;
