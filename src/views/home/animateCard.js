import {Animated, Modal, Pressable, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import ModalData from './modal';
import styles from '../../styles/home/animateCard';

const Animatedcard = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const ballAnimatedValue = useRef(new Animated.Value(0)).current;
  const {
    itmId,
    items,
    title,
    color,
    marginTop,
    phonenumber,
    number,
    verified,
    status,
    data,
  } = props;
  const [updated, setUpdated] = useState(data);
  const animatedStyle = {
    transform: [
      {
        translateY: ballAnimatedValue,
      },
    ],
  };

  const moveBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: -10,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const moveBallBack = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const modalOpen = id => {
    const datas = data.filter(item => {
      if (id === item.id) {
        return id === item.id;
      }
    });
    moveBall();
    setUpdated(datas);
    setModalVisible(!modalVisible);
  };

  return (
    <Pressable onPress={() => modalOpen(itmId)}>
      <Animated.View
        style={[
          styles.Wraper,
          animatedStyle,
          {
            backgroundColor: color,
            marginTop: marginTop,
          },
        ]}>
        <Text style={styles.mainHeading}>{items}</Text>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.numberWraper}>
          {phonenumber}
          <Text style={styles.number}>{number}</Text>
        </Text>
        <Text style={styles.statusVerify}>
          {verified}
          <Text style={styles.status}>{status}</Text>
        </Text>
      </Animated.View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalData
          updated={updated}
          color={color}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          moveBallBack={moveBallBack}
        />
      </Modal>
    </Pressable>
  );
};

export default Animatedcard;
