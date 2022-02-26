import React from 'react';
import Background from '../components/Background';
import {StyleSheet} from 'react-native';
import GeneralHeader from '../components/GeneralHeader';
import screenNames from '../constants/screenNames';
import ProgressBar from '../components/Status/ProgressBar';
import {spacingChanger} from '../utils/utilFunctions';
import Box from '../components/Box';
import Text from '../components/Text';
import SubTask from '../components/Status/SubTasks';

const styles = StyleSheet.create({
  container: {
    paddingVertical: '15%',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

const Status = ({navigation}) => {
  return (
    <Background style={styles.container} backgroundColor="background">
      <GeneralHeader
        title="Your Status"
        goTo={screenNames.home}
        navigation={navigation}
      />
      <Box style={styles.progressContainer}>
        <ProgressBar />
        <Text
          color="input"
          variant="small"
          style={spacingChanger({marginTop: 'xxs'})}>
          You have completed 20 / 40 tasks
        </Text>
      </Box>
      <SubTask title={'Most Successful Tasks'} data={[0, 1, 2]} />
    </Background>
  );
};

export default Status;
