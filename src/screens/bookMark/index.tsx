import React from 'react';
import Wrapper from '@components/wrapper';
import { RF } from '@theme/responsive';
import Header from '@components/header/index';
import { useHook } from './useHook';
import { FlashList } from '@components/FlashList';
import { PlaceHolder } from '@utils/constants';
const BookMark = () => {
  const { renderItem, watchlist } = useHook();

  return (
    <Wrapper noPaddingTop={false} testID="bookmark-screen">
      <Header title={PlaceHolder.BookMark} testID="bookmark-header" />
      <FlashList
        data={watchlist}
        horizontal={false}
        renderItem={renderItem}
        contentContainerStyle={{ marginRight: RF(110), marginTop: RF(10) }}
        testID="bookmark-flashlist"
      />
    </Wrapper>
  );
};

export { BookMark };
