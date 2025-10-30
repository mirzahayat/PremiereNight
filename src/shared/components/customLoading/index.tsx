import React from 'react';
import { View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { HP, RF } from '@theme/responsive';
import { COLORS } from '../../theme/colors';

const CustomLoading = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        alignSelf: 'center',
        top: HP(45),
      }}
    >
      <SkypeIndicator color={COLORS.WHITE} size={RF(40)} />
    </View>
  );
};
export default CustomLoading;
