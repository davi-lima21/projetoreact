import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: '#ADD8E6',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    container2: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    container3: {
      flex: 1,
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'stretch',
    },

    lightGreen: {
      justifyContent: 'center',
      textAlign: "center",
      color: 'blue',
      fontSize: 30,
      backgroundColor: '#90ee90'
    },
    azul: {
      backgroundColor: 'blue',
      color: '#fff'
    },
    amarelo: {
      textAlign: "right",
      backgroundColor: 'yellow',
      color: 'red'
    }
    
  });

  export default styles;