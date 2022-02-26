import React from 'react';
import Box from '../Box';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: StyleSheet.hairlineWidth,
  },
});

const RowSeparator = () => {
  return <Box style={styles.container} backgroundColor="link" />;
};

export default RowSeparator;
