//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@components/FlashList';
import { styles } from './styles';
const MovieCarousels = React.memo(({ renderItem, title, data }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{title}</Text>
      <FlashList data={data} renderItem={renderItem} />
    </View>
  );
});

//make this component available to the app
export { MovieCarousels };
