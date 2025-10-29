import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/theme/colors";
import { RF } from "../../shared/theme/responsive";

// define your styles
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: RF(8),
  },
  footer: {
    paddingVertical: RF(20),
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RF(50),
  },
  emptyText: {
    fontSize: RF(15),
    color: COLORS.GRAY,
  }
  });
  
  export {styles}