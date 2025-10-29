import { StyleSheet } from 'react-native';
import { COLORS } from '@theme/colors';
import { RF } from '@theme/responsive';

const styles = StyleSheet.create({
  container: { flex: 1, padding: RF(RF(6)), backgroundColor: COLORS.WHITE },
  title: {
    fontSize: RF(22),
    fontWeight: 'bold',
    color: COLORS.BLACK,
    alignItems: 'center',
    marginTop: RF(6),
    marginBottom: RF(14),
  },
  imagePoster: {
    width: '100%',
    height: RF(300),
    borderRadius: RF(6),
  },
  overViewCon: {
    flex: 1,
    paddingLeft: RF(6),
    justifyContent: 'space-between',
  },
  subContainer: {
    backgroundColor: COLORS.HALF_WHITE,
    paddingHorizontal: RF(10),
    paddingVertical: RF(6),
    borderRadius: RF(4),
  },
  Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: RF(16),
    borderRadius: RF(16),
  },
  iconTitle: {
    color: COLORS.BLACK,
    marginLeft: RF(4),
  },
  rating: {
    alignItems: 'center',
    backgroundColor: COLORS.HALF_WHITE,
    padding: RF(6),
    borderRadius: RF(6),
    marginBottom: RF(6),
    marginTop: RF(14),
  },
  ratingTitle: {
    fontWeight: 'bold',
    marginVertical: 4,
    color: COLORS.BLACK,
  },
  ratCon: {
    backgroundColor: COLORS.BLUE,
    marginBottom: RF(4),
    paddingVertical:RF(4),
    borderRadius: RF(4),
    paddingHorizontal:RF(6)
  },
  value: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
export { styles };
