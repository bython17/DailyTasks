import React, {useContext} from 'react';
import Box from '../Box';
import Text from '../Text';
import {TaskContext} from '../../config/Navigation';
import {spacingChanger} from '../../utils/utilFunctions';
import Task from '../Home/Task';
import {FlatList, StyleSheet} from 'react-native';
import RowSeparator from '../Settings/RowSeparator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  flatlist: {
    alignItems: 'flex-start',
    backgroundColor: 'red',
    wdith: '80%',
  },
});

const SubTask = ({title, data = []}) => {
  const tasks = useContext(TaskContext);
  // filtered tasks which have only the data ids
  const filteredTasks = tasks.tasks.tasks.filter(task => {
    return task.id in data;
  });

  const RenderItem = ({item}) => {
    return (
      <Box spacing={{marginTop: 's', marginBottom: 's'}}>
        <Task
          id={item.id}
          name={item.name}
          time={item.time}
          state={item.state}
          mode={'abnormal'}
        />
      </Box>
    );
  };

  return (
    <Box style={styles.container}>
      <Text
        style={spacingChanger({marginTop: 'xl'})}
        color="foreground"
        variant="subHeader">
        {title}
      </Text>
      <FlatList
        style={{width: '80%'}}
        contentContainerStyle={styles.flatlist}
        renderItem={RenderItem}
        ItemSeparatorComponent={RowSeparator}
        data={filteredTasks}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default SubTask;
