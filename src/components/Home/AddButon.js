import React from 'react';
import Icon from '../Icon';
import {StyleSheet} from 'react-native';
import Button from '../Button';
import {spacingChanger} from '../../utils/utilFunctions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 82,
    width: 82,
    borderRadius: 42.5,
  },
});

const AddButton = ({setter, value}) => {
  return (
    <Button
      onPress={() => setter(value)}
      style={styles.container}
      backgroundColor="secondary"
      text={<Icon name="plus" size={55} color="background" />}></Button>
  );
};

export default AddButton;
