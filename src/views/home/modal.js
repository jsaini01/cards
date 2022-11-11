import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/home/animateCard';

const modal = props => {
  const {updated, color, modalVisible, setModalVisible, moveBallBack} = props;

  const Cross = () => {
    setModalVisible(!modalVisible);
    moveBallBack();
  };

  return (
    <View style={styles.modalWraper}>
      {updated.map(modalData => {
        return (
          <View
            style={[styles.Wraper, {backgroundColor: color}]}
            key={modalData.id}>
            <Text style={styles.mainHeading}>{modalData.heading}</Text>
            <Text style={styles.heading}>{modalData.title}</Text>
            <Text style={styles.numberWraper}>
              {modalData.phNo}
              <Text style={styles.number}>{modalData.number}</Text>
            </Text>
            <Text style={styles.statusVerify}>
              {modalData.verfied}
              <Text style={styles.status}>{modalData.status}</Text>
            </Text>
          </View>
        );
      })}
      <TouchableOpacity onPress={Cross} style={styles.crossWrap}>
        <Text style={styles.cross}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default modal;
