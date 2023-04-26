import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 18
    },
    tituloFormaPagamento: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10
    },
    containerOpcoes: {

    },
    opcaoPagamento: {
        width: 300,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#F5F5F5",
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        alignItems: "center",
      },
      viewImage:{
        flex:1,
      },
      imagePagamento: {
        
        width: 33,
        height: 33,
        marginRight: 1,
      },
      textoOpcao: {
        flex: 1,
        textAlign: "center",
      },
      preco: {
        flex:1,
        textAlign: "center",
      },
});

export default styles;