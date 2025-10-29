//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HP } from '@theme/responsive';
// create a component
const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
  },
  container: {
    width: '100%',
    height: HP(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
});

//make this component available to the app
export default Header;
