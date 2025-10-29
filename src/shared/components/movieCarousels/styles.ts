import { StyleSheet } from "react-native";
import { RF } from "@theme/responsive";

// define your styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingVertical: RF(20),
      paddingLeft: RF(10),
  },
  textContainer:{
    fontSize: RF(20),
    paddingBottom: RF(10),
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  }
  });
  
  export {styles}