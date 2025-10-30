//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RF } from '@theme/responsive';
import { COLORS } from '../../theme/colors';

// create a component
const ActorList = ({ actors, renderItem }: any) => {
  return (
    <View style={{}}>
      <Text style={styles.container}>{'Actors:'}</Text>
      <FlatList
        data={actors}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index?.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: RF(12),
    fontSize: RF(18),
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export { ActorList };
