import { StyleSheet } from 'react-native';
import { RF } from '@theme/responsive';

const styles = StyleSheet.create({
  container: { margin: 8, flexDirection: 'row' },
  Image: {
    width: RF(100),
    height: RF(130),
    borderRadius: RF(10),
  },
  titleCon: {
    fontSize: RF(16),
    fontWeight: '700',
    paddingBottom: RF(10),
  },
  title: { marginHorizontal: RF(10) },
});
export { styles };
