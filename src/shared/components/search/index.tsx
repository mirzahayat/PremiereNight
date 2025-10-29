//import liraries
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { PlaceHolder } from '@utils/constants';
import { COLORS } from '@theme/colors';
// create a component
const SearchInput = ({ searchQuery, setSearchQuery }: any) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder={PlaceHolder.search}
          placeholderTextColor={COLORS.GRAY}
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType={PlaceHolder.search}
          clearButtonMode={PlaceHolder.editing}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default SearchInput;
