import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {ThemeContext} from '../config/Navigation';

const Checkbox = ({
  color,
  background = 'background',
  checked,
  onToggle,
  ...rest
}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={{
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        borderWidth: 2,
        borderColor: theme.colors[color],
        backgroundColor: checked
          ? theme.colors[color]
          : theme.colors['background'],
      }}
      {...rest}
      onPress={onToggle}
    />
  );
};

export default Checkbox;
