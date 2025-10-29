//import liraries
import React, { Component } from 'react';
import FastImage from 'react-native-fast-image';
import { RF } from '@theme/responsive';
// create a component
const TabBarIcon = ({ source }: any) => (
  <FastImage
    source={source}
    style={{ width: RF(22), height: RF(22) }}
    resizeMode={'contain'}
  />
);

//make this component available to the app
export default TabBarIcon;
