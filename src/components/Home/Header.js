import React from 'react';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import {StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import screenNames from '../../constants/screenNames';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '5%',
    marginBottom: '20%',
  },
});

const Header = ({navigation}) => {
  return (
    <Box style={styles.container}>
      <Text style={{padding: 5}} variant="header" color="primary">
        Daily
        <Text variant="header" color="foreground">
          Tasks
        </Text>
      </Text>
      <Ripple
        onPress={() => navigation.navigate(screenNames.settingsStack)}
        rippleContainerBorderRadius={30}>
        <Icon
          style={{padding: 5}}
          name="cog"
          variant="header"
          color="primary"
        />
      </Ripple>
    </Box>
  );
};

export default Header;
