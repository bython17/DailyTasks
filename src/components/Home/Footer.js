import React from 'react';
import Text from '../Text';
import Box from '../Box';
import AddButton from './AddButon';
import {StyleSheet} from 'react-native';
import {spacingChanger} from '../../utils/utilFunctions';
import {useNavigation} from '@react-navigation/core';
import Icon from '../Icon';
import Button from '../Button';
import screenNames from '../../constants/screenNames';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    ...spacingChanger({marginTop: 'l'}),
  },
  buttonStyles: {
    alignItems: 'center',
  },
});

const Footer = ({setter}) => {
  const navigation = useNavigation();

  return (
    <Box style={styles.container}>
      <Box style={styles.buttonStyles}>
        <Button
          onPress={() => navigation.navigate(screenNames.status)}
          style={{padding: 0, margin: 0}}
          text={<Icon name="progress-check" color="primary" variant="header" />}
          noSpacing={true}
        />
        <Text color="foreground" variant="regular">
          Status
        </Text>
      </Box>

      <AddButton setter={setter} value={true} />
    </Box>
  );
};

export default Footer;
