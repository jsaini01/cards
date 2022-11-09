import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Home from './src/views/home/home';
import styles from './src/styles/appStyle';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.imageWrap}>J</Text>
        <View style={styles.textWraper}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.textName}>Jassi</Text>
        </View>
      </View>
      <Home />
    </SafeAreaView>
  );
};

export default App;
