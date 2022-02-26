import React, {useContext, useState} from 'react';
import Background from '../components/Background';
import GeneralHeader from '../components/GeneralHeader';
import screenNames from '../constants/screenNames';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import Checkbox from '../components/Checkbox';
import {ThemeContext} from '../config/Navigation';

const styles = StyleSheet.create({
  container: {
    paddingVertical: '15%',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  choose: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10%',
  },
});

const Choose = ({text, checked, onToggle}) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.choose}>
      <Text variant="subHeader" color="foreground" style={{fontSize: 19}}>
        {text}
      </Text>
      <Checkbox color="primary" checked={checked} onToggle={onToggle} />
    </TouchableOpacity>
  );
};

const Theme = ({navigation}) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(theme.type === 'light' ? false : true);

  return (
    <Background style={styles.container} backgroundColor="background">
      <GeneralHeader
        title="Theme"
        goTo={screenNames.settings}
        navigation={navigation}
      />
      <Choose
        text="Light Theme"
        checked={!isDark}
        onToggle={() => {
          setTheme('light');
          setIsDark(false);
        }}
      />
      <Choose
        text="Dark Theme"
        checked={isDark}
        onToggle={() => {
          setTheme('dark');
          setIsDark(true);
        }}
      />
    </Background>
  );
};

export default Theme;
