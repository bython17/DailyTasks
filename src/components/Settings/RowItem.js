import React, {useContext} from 'react';
import Text from '../Text';
import Icon from '../Icon';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../config/Navigation';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  font: {
    fontSize: 19,
  },
});

const RowItem = ({iconName, text, func}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={() => func()}
      style={{
        ...styles.container,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.m,
      }}>
      <Icon name={iconName} variant="subHeader" color="foreground" />
      <Text spacing={{marginLeft: 's'}} variant="regular" color="foreground">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default RowItem;
