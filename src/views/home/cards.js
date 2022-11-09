import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../styles/home/cardStyle';

const cards = () => {
  return (
    <View style={styles.cardWraper}>
      <Text style={styles.cardText}>cards</Text>
    </View>
  );
};

export default cards;
