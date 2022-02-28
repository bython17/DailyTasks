import React, {useContext} from 'react';
import Box from '../Box';
import Text from '../Text';
import {TaskContext} from '../../config/Navigation';
import {spacingChanger} from '../../utils/utilFunctions';
import Task from '../Home/Task';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  flatlist: {
    alignItems: 'center',
    wdith: '100%',
    ...spacingChanger({marginTop: 's'}),
  },
});

const SubTask = ({title, data = []}) => {
  const tasks = useContext(TaskContext);
  // filtered tasks which have only the data ids
  const filteredTasks = tasks.tasks.tasks.filter(task => {
    return task.id in data;
  });

  // initialize navigation
  const navigation = useNavigation();

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

  const Separator = () => {
    return <Box spacing={{marginTop: 'xxs', marginBottom: 'xxs'}} />;
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
        contentContainerStyle={styles.flatlist}
        renderItem={RenderItem}
        ItemSeparatorComponent={Separator}
        data={filteredTasks}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default SubTask;
