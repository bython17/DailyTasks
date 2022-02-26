import React, {useContext} from 'react';
import Task from './Task';
import Box from '../Box';
import {spacingChanger} from '../../utils/utilFunctions';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TaskContext} from '../../config/Navigation';
import {StyleSheet} from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
  },
  listView: {
    alignItems: 'center',
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 8,

    ...spacingChanger({marginBottom: 'm'}),
  },
  rowFront: {
    minWidth: '100%',
    width: '100%',
    ...spacingChanger({marginBottom: 'm'}),
  },
  deleteButton: {
    height: '100%',
    width: '18%',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  closeButton: {
    height: '100%',
    width: '20%',
    borderRadius: 0,
  },
});

const TaskList = () => {
  const {tasks, setTasks} = useContext(TaskContext);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);

    const filtered = tasks.tasks.filter(el => {
      return el.key !== rowKey;
    });

    setTasks({tasks: [...filtered]});
  };

  const HiddenCloseEdit = props => {
    const {onClose, onDelete} = props;
    return (
      <Box style={styles.rowBack} backgroundColor="circleBackground">
        <Button
          style={styles.closeButton}
          onPress={onClose}
          text={<Icon size={25} name="close-circle" style={{color: 'white'}} />}
          backgroundColor="link"
        />
        <Button
          style={styles.deleteButton}
          onPress={onDelete}
          text={<Icon size={25} name="delete" style={{color: 'white'}} />}
          backgroundColor="warnning"
        />
      </Box>
    );
  };

  const renderItem = (data, rowMap) => {
    data = data.item;
    return (
      <Box style={styles.rowFront} backgroundColor="background">
        <Task
          id={data.id}
          name={data.name}
          time={data.time}
          state={data.state}
        />
      </Box>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenCloseEdit
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <Box style={styles.container}>
      <SwipeListView
        contentContainerStyle={styles.listView}
        data={tasks.tasks}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        disableRightSwipe
        rightOpenValue={-125}
      />
    </Box>
  );
};

export default TaskList;
