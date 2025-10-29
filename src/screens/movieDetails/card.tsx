//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
// create a component
const Card = ({ title, value }: { title: string; value: any }) => {
  return (
    <View style={styles.rating}>
      <Text style={styles.ratingTitle}>{title}</Text>
      <View style={styles.ratCon}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
//make this component available to the app
export { Card };
