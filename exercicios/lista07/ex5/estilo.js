import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#ADD8E6',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    container2: {
      flex: 2,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    container3: {
      flex: 1,
      backgroundColor: 'pink',
      //justifyContent: 'center',
      flexDirection: 'row'
    },
    black: {
      flex: 1,
      backgroundColor: '#000',
      textAlign: "center",
    },
    textWhite: {
      color: '#fff',
      fontSize: 17
    },
    amarelo: {
      flex: 1,
      backgroundColor: 'yellow',
    },
    textBlue: {
      textAlign: "center",
      color: 'blue',
      fontSize: 17,
    }
    
  });

  export default styles;