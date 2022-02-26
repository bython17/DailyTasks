import React from 'react';
import {FlatList} from 'react-native';
import RowItem from './RowItem';
import {StyleSheet} from 'react-native';
import RowSeparator from './RowSeparator';
import setting_vals from '../../data/settings_list';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    width: '100%',
  },
});

const RenderItem = ({item, nav}) => {
  return (
    <RowItem
      iconName={item.iconName}
      text={item.title}
      func={() => item.func(nav)}
    />
  );
};

const SettingList = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.container}
      data={setting_vals}
      ItemSeparatorComponent={RowSeparator}
      renderItem={({item}) => <RenderItem item={item} nav={navigation} />}
      keyExtractor={item => item.id}
    />
  );
};

export default SettingList;
