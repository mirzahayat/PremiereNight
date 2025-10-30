import React from 'react';
import Wrapper from '@components/wrapper';
import { RF, WP } from '@theme/responsive';
import SearchInput from '../../shared/components/search/index';
import { useHook } from './useHook';
import Header from '../../shared/components/header/index';
import { FlashList } from '@components/FlashList';
import { PlaceHolder } from '@utils/constants';
const Search = () => {
  const { data, query, setQuery, renderItem } = useHook();
  return (
    <Wrapper noPaddingTop={false} testID="search-screen">
      <Header title={PlaceHolder.search} testID="search-header" />
      <SearchInput searchQuery={query} setSearchQuery={setQuery} testID="search-input" />
      <FlashList
        data={data}
        horizontal={false}
        renderItem={renderItem}
        contentContainerStyle={{ marginRight: RF(110), marginTop: RF(10) }}
        testID="search-flashlist"
      />
    </Wrapper>
  );
};

export { Search };
