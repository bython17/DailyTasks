import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import Box from '../Box';
import Text from '../Text';
import TextInput from '../TextInput';
import Button from '../Button';
import {Alert} from 'react-native';
import {TaskContext} from '../../config/Navigation';

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    marginTop: 'auto',
    height: '72%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: '14%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

const CreateModal = () => {
  const [title, setTitle] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  // the task context
  const {tasks, setTasks} = useContext(TaskContext);

  const createTask = () => {
    // validating the states
    if (title.length === 0) {
      Alert.alert('Invalid Input', 'Please insert the title.');
      return;
    }
    if (hour.length === 0) {
      Alert.alert('Invalid Input', 'Please insert the hour.');
      return;
    }
    if (minute.length === 0) {
      Alert.alert('Invalid Input', 'Please insert the minute.');
      return;
    }
    // checking for hour and minute to validate
    if (parseInt(hour) > 24) {
      Alert.alert('Invalid Input', 'Please insert the correct hour.');
      return;
    }
    if (parseInt(minute) > 59) {
      Alert.alert('Invalid Input', 'Please insert the correct minute.');
      return;
    }

    // the following lines are executed if the input is valid

    const returnableID =
      tasks.tasks.length !== 0 ? tasks.tasks[tasks.tasks.length - 1].id + 1 : 0;

    const returnable = {
      id: returnableID,
      key: returnableID,
      name: title,
      time: `${hour}:${minute < 10 ? `0${minute}` : minute}`,
      state: false,
    };

    setTasks({tasks: [...tasks.tasks, returnable]});
  };

  return (
    <Box
      style={styles.container}
      backgroundColor="background"
      borderColor="primary">
      <Text spacing={{marginBottom: 'xl'}} variant="header" color="foreground">
        Create Task
      </Text>

      <TextInput
        value={title}
        onChangeText={txt => setTitle(txt)}
        width="75%"
        borderColor="primary"
        variant={title.length == 0 ? 'inputItalic' : 'regular'}
        placeholder="*Title"
      />

      <Text
        variant="smallerItalic"
        spacing={{marginTop: 'xxs', marginBottom: 'l'}}
        color="input">
        Suggestion: try to make it less
      </Text>

      <Box style={styles.textContainer}>
        <TextInput
          value={hour}
          keyboardType="numeric"
          onChangeText={hour => setHour(hour)}
          width="25%"
          borderColor="primary"
          variant={hour.length == 0 ? 'inputItalic' : 'regular'}
          placeholder="*Hour"
        />

        <Text
          variant="header"
          color="foreground"
          spacing={{marginHorizontal: 's'}}>
          :
        </Text>

        <TextInput
          value={minute}
          keyboardType="numeric"
          onChangeText={minute => setMinute(minute)}
          width="25%"
          borderColor="primary"
          variant={minute.length == 0 ? 'inputItalic' : 'regular'}
          placeholder="*Minute"
        />
      </Box>

      <Text
        variant="smallerItalic"
        spacing={{marginTop: 'xxs', marginBottom: 'xl'}}
        color="input">
        Use 24hrs format
      </Text>

      <Button
        text="Add Task"
        backgroundColor="primary"
        variant="regularBold"
        onPress={createTask}
      />
    </Box>
  );
};

export default CreateModal;
