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
    <Wrapper noPaddingTop={false}>
      <Header title={PlaceHolder.BookMark} />
      <FlashList
        data={watchlist}
        horizontal={false}
        renderItem={renderItem}
        contentContainerStyle={{ marginRight: RF(110), marginTop: RF(10) }}
      />
    </Wrapper>
  );
};

export { BookMark };
