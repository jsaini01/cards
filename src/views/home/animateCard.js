import {
  Modal,
  Animated,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/home/animateCard';

const Animatedcard = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    id,
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

  const modalOpen = id => {
    const datas = data.filter(item => {
      if (id === item.id) {
        return id === item.id;
      }
    });
    console.log('datas', datas);
    setUpdated(datas);
    setModalVisible(!modalVisible);
  };

  return (
    <Pressable onPress={() => modalOpen(id)}>
      <View
        style={[
          styles.Wraper,
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
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalWraper}>
          {updated.map(modalData => {
            return (
              <View
                style={[styles.Wraper, {backgroundColor: color}]}
                key={modalData.id}>
                <Text style={styles.mainHeading}>{modalData.heading}</Text>
                <Text style={styles.heading}>{modalData.title}</Text>
                <Text style={styles.numberWraper}>
                  {phonenumber}
                  <Text style={styles.number}>{number}</Text>
                </Text>
                <Text style={styles.statusVerify}>
                  {verified}
                  <Text style={styles.status}>{status}</Text>
                </Text>
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.crossWrap}>
            <Text style={styles.cross}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Pressable>
  );
};

export default Animatedcard;
