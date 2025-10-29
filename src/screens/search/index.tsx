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
    <Wrapper noPaddingTop={false}>
      <Header title={PlaceHolder.search} />
      <SearchInput searchQuery={query} setSearchQuery={setQuery} />
      <FlashList
        data={data}
        horizontal={false}
        renderItem={renderItem}
        contentContainerStyle={{ marginRight: RF(110), marginTop: RF(10) }}
      />
    </Wrapper>
  );
};

export { Search };
