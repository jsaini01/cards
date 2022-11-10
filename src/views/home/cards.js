/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {View} from 'react-native';
import AnimateCard from './animateCard';
import cardData from '../../data/cardData';
import styles from '../../styles/home/cardStyle';

const cards = () => {
  return (
    <View style={styles.cardWraper}>
      {cardData.map(itm => {
        return (
          <AnimateCard
            key={itm.id}
            items={itm.heading}
            title={itm.title}
            color={itm.color}
            marginTop={itm.marginTop}
            phonenumber={itm.phNo}
            number={itm.number}
            verified={itm.verfied}
            status={itm.status}
            id={itm.id}
            data={cardData}
          />
        );
      })}
    </View>
  );
};

export default cards;
