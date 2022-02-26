import React, {createContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenNames from '../constants/screenNames';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Theme from '../screens/Theme';
import Status from '../screens/Status';
import {lightTheme, darkTheme} from '../constants/theme';
import useFetch from '../hooks/useFetch.js';
import fileNames from '../constants/fileNames';
import save from '../utils/save';

const MainStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

export const ThemeContext = createContext();
export const TaskContext = createContext();

const defaultScreenOptions = {
  animation: 'slide_from_right',
};

const SettingsStackScreen = () => (
  <SettingsStack.Navigator screenOptions={defaultScreenOptions}>
    <SettingsStack.Screen
      name={screenNames.settings}
      component={Settings}
      options={{headerShown: false}}
    />
    <SettingsStack.Screen
      name={screenNames.theme}
      component={Theme}
      options={{headerShown: false}}
    />
  </SettingsStack.Navigator>
);

const MainStackScreen = () => {
  const {data} = useFetch(fileNames.userConfig);
  const [theme, _setTheme] = useState(null);

  const {data: tasks, setData: _setTasks} = useFetch(fileNames.taskList);

  const computeTheme = val => {
    return val === 'light' ? lightTheme : darkTheme;
  };

  useEffect(() => {
    data && _setTheme(computeTheme(data['theme']));
  }, [data]);

  const setTasks = value => {
    _setTasks(value);
    save(fileNames.taskList, null, null, value);
  };

  const setTheme = value => {
    _setTheme(computeTheme(value));
    save(fileNames.userConfig, 'theme', value, theme);
  };

  return (
    <ThemeContext.Provider value={{data, theme, setTheme}}>
      <TaskContext.Provider value={{tasks, setTasks}}>
        {theme && tasks && (
          <MainStack.Navigator
            screenOptions={defaultScreenOptions}
            initialRouteName={screenNames.home}>
            <MainStack.Screen
              name={screenNames.home}
              component={Home}
              options={{headerShown: false}}
            />
            <MainStack.Screen
              name={screenNames.settingsStack}
              component={SettingsStackScreen}
              options={{headerShown: false}}
            />
            <MainStack.Screen
              name={screenNames.status}
              component={Status}
              options={{headerShown: false}}
            />
          </MainStack.Navigator>
        )}
      </TaskContext.Provider>
    </ThemeContext.Provider>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
