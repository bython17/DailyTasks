import React, {useState} from 'react';
import Background from '../components/Background';
import Header from '../components/Home/Header';
import TaskList from '../components/Home/TaskList';
import {StyleSheet} from 'react-native';
import CreateModal from '../components/Home/Create';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import Footer from '../components/Home/Footer';

const styles = StyleSheet.create({
  container: {
    paddingVertical: '15%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modal: {
    marginTop: 0,
  },
});

const Home = ({navigation}) => {
  const [isModal, setIsModal] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <Background backgroundColor="background" style={styles.container}>
      <Header navigation={navigation} />
      <TaskList />
      <SwipeUpDownModal
        modalVisible={isModal}
        PressToAnimate={isAnimate}
        ContentModal={<CreateModal />}
        ContentModalStyle={styles.modal}
        onClose={() => {
          setIsModal(false);
          setIsAnimate(false);
        }}
      />
      <Footer setter={setIsModal} />
    </Background>
  );
};

export default Home;
