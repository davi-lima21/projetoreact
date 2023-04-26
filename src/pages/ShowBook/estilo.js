import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 5
  },
  produtos: {
    margin: 10,

  },
  livro: {
    width: 290,
    height: 386,
    marginBottom: 8
  },
  width290: {
    width: 290
  },
  tituloLivro: {
    fontSize: 16,
    textAlign: "left"
  },
  nomeAutor: {
    fontSize: 15,
    color: "grey"
  },
  preco: {
    fontSize: 18
  },
  containerButtons: {
    width: 290,

  },
  buttons: {
    margin: 5
  },
  buttonCarrinho: {
    backgroundColor: "#FFE600",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  textButton2: {
    textAlign: "center",
    fontSize: 16
  },
  textButton1: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  buttonComprar: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },

  tituloSinopse: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 16
  },
  sinopse:{
    textAlign: "justify",
  }

});

export default styles;