import React, {useState, useContext} from 'react';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';
import Checkbox from '../Checkbox';
import {StyleSheet} from 'react-native';
import {TaskContext} from '../../config/Navigation';
import {spacingChanger} from '../../utils/utilFunctions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonTimeContainer: {
    width: '75%',
    ...spacingChanger({marginRight: 'm'}),
  },
});

const Task = ({id, name, time, state, mode = 'normal'}) => {
  const [isChecked, setIsChecked] = useState(state);
  const {tasks, setTasks} = useContext(TaskContext);

  return (
    <Box style={styles.container}>
      <Box
        style={
          mode === 'normal'
            ? styles.buttonTimeContainer
            : {...styles.buttonTimeContainer, width: '100%'}
        }>
        <Button
          text={name}
          variant="regularBold"
          backgroundColor="primary"
          width="100%"
        />
        {mode === 'normal' && (
          <Text
            style={{
              alignSelf: 'flex-end',
              ...spacingChanger({marginRight: 'xs'}),
            }}
            variant="small"
            color="time">
            {time}
          </Text>
        )}
      </Box>
      {mode === 'normal' && (
        <Checkbox
          color="primary"
          checked={isChecked}
          onToggle={() => {
            setIsChecked(!isChecked);
            setTasks({
              tasks: tasks.tasks.map(el =>
                el.id === id ? {...el, state: !el.state} : el,
              ),
            });
          }}
        />
      )}
    </Box>
  );
};

export default Task;
