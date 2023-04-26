import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    direita: {
      textAlign:"right",
      color: 'red',
      backgroundColor: 'yellow',
    },
    esquerda: {
        textAlign:"left",
        color: '#fff',
        fontSize: 15,
        backgroundColor: 'blue',
      },
    centralizado: {
        color: 'blue',
        textAlign:"center",
        fontWeight: 'bold',
        backgroundColor: '#3CB371',
        padding: 15
      },
  });

  export default styles;