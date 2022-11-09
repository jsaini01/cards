import {View, Text} from 'react-native';
import React from 'react';
import Cards from './cards';
import styles from '../../styles/home/homeStyle';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textWraper}>My Documents</Text>
      <Cards />
    </View>
  );
};

export default Home;
