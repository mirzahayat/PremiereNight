import { StyleSheet } from 'react-native';
import { RF } from '@theme/responsive';

const styles = StyleSheet.create({
  starBadge: {
    position: 'absolute',
    top: RF(6),
    right: RF(14),
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: RF(12),
    padding: RF(4),
  },
  container: {
    width: RF(130),
    height: RF(200),
    marginRight: RF(10),
    borderRadius: RF(10),
  },
});
export { styles };
