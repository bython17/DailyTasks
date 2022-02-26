import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import GeneralHeader from '../components/GeneralHeader';
import SettingList from '../components/Settings/SettingList';
import screenNames from '../constants/screenNames';

const styles = StyleSheet.create({
  container: {
    paddingVertical: '15%',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
});

const Settings = ({navigation}) => {
  return (
    <Background style={styles.container} backgroundColor="background">
      <GeneralHeader
        title="Settings"
        navigation={navigation}
        goTo={screenNames.home}
      />
      <SettingList />
    </Background>
  );
};

export default Settings;
