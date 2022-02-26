import React from 'react';
import Box from './Box';
import Icon from './Icon';
import Text from './Text';
import Ripple from 'react-native-material-ripple';
import {StyleSheet} from 'react-native';
import {spacingChanger} from '../utils/utilFunctions';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '20%',
  },
});

const GeneralHeader = ({title, goTo, navigation}) => {
  return (
    <Box style={styles.headerContainer}>
      <Ripple
        onPress={() => setTimeout(() => navigation.navigate(goTo), 300)}
        rippleContainerBorderRadius={30}>
        <Icon
          style={{padding: 5}}
          name="arrow-left"
          variant="header"
          color="foreground"
        />
      </Ripple>

      <Text
        style={{
          textAlign: 'center',
          padding: 5,
          ...spacingChanger({
            marginLeft: 'm',
          }),
        }}
        variant="header"
        color="primary">
        {title}
      </Text>
    </Box>
  );
};

export default GeneralHeader;
