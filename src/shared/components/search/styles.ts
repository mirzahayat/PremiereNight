import { StyleSheet } from 'react-native';
import { RF, WP } from '../../theme/responsive';
import { COLORS } from '../../theme/colors';

// define your styles
const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: RF(14),
    paddingVertical: RF(10),
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: RF(1),
    borderBottomColor: COLORS.HALF_WHITE,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: RF(18),
    borderWidth: 1,
    borderColor: COLORS.LIGHTGRAY,
    shadowColor: COLORS.BLACK,
    shadowOpacity: RF(0.2),
    shadowRadius: RF(3),
    shadowOffset: { width: WP(0), height: RF(1) },
    elevation: 2,
  },
  searchIcon: {
    fontSize: RF(14),
    marginLeft: RF(14),
    marginRight: RF(6),
    color: COLORS.GRAY,
  },
  searchInput: {
    flex: 1,
    height: RF(38),
    paddingHorizontal: RF(8),
    paddingVertical: RF(10),
    fontSize: RF(14),
    color: COLORS.BLACK,
  },
});

export { styles };
