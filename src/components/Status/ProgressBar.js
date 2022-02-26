import React, {useContext} from 'react';
import {ThemeContext} from '../../config/Navigation';
import {Animated, StyleSheet} from 'react-native';
import {colorChanger, spacingChanger} from '../../utils/utilFunctions';
import Text from '../Text';
import Box from '../Box';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
  },
  progressContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 20,
    borderRadius: 13,
    borderWidth: 2,
    ...spacingChanger({marginTop: 'm'}),
  },
});

const ProgressBar = ({progressNumber = 70}) => {
  const theme = useContext(ThemeContext);
  const AnimatedProgressNumber = new Animated.Value(progressNumber);

  return (
    <Box style={styles.container}>
      <Animated.Text
        style={{
          color: colorChanger('primary', theme),
          ...theme.data.textVariant.header,
          fontSize: 48,
        }}>
        {'39%'}
      </Animated.Text>
      <Animated.View
        style={[
          styles.progressContainer,
          {borderColor: colorChanger('input', theme)},
        ]}>
        <Animated.View
          style={{
            borderRadius: 10,
            height: '100%',
            width: AnimatedProgressNumber,
            backgroundColor: colorChanger('secondary', theme),
            borderWidth: 0,
          }}
        />
      </Animated.View>
    </Box>
  );
};

export default ProgressBar;
