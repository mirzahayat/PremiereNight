//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { filledStar, unfilledStar } from '@assets/icon';
import { RF } from '@theme/responsive';
// create a component
const StarIcon = ({ enable }: any) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={enable ? filledStar : unfilledStar}
        style={styles.Icon}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Icon: { width: RF(18), height: RF(18) },
});

//make this component available to the app
export { StarIcon };
