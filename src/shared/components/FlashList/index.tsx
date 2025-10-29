//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { WP, HP } from '@theme/responsive';
import { styles } from './styles';
import { PlaceHolder } from '@utils/constants';
// create a component
const FlashList = ({
  data,
  renderItem,
  horizontal = true,
  contentContainerStyle,
}: any) => {
  return (
    <FlatList
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      initialNumToRender={10}
      contentContainerStyle={contentContainerStyle}
      windowSize={10}
      onEndReachedThreshold={0.4}
      removeClippedSubviews
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      keyExtractor={item => String(item.id)}
      ListEmptyComponent={EmplyList}
    />
  );
};

const EmplyList = () => {
  return (
    <View style={styles.container}>
      <Text>{PlaceHolder.noDataFound}</Text>
    </View>
  );
};
//make this component available to the app
export { FlashList };
