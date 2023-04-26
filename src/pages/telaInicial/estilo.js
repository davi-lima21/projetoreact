import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  scrollContainer: {
    height: '100%',
    width: "100%",
  },
  logo:{
    marginTop: 5,
    height: 42,
    width: 90
  },
  titulo: {
    marginTop: 10,
    textAlign:"center",
    fontSize: 20,
    flex:1
  },
  containerFiltro:{
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center"
  },
  filtros:{
    fontSize: 12
  },
  filtro1:{
    color: "#000",
    textAlign: "center"
  },
  filtro2:{
    color: "grey",
    textAlign: "center"
  },
  filtro3:{
    color: "grey",
    textAlign: "center"
  },
  containerSearch:{
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  clearIcon: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  searchInput:{
    flex: 1,
  },
  containerProdutos:{
    flexDirection: "row",
    flexWrap: 'wrap',
    marginTop: 20,
    width: "100%"
  },
  produtos:{
    margin: 10,
  },
  livro:{
    width: 144,
    height: 216,
    marginBottom: 8
  },
  width144:{
    width: 144
  },
  tituloLivro:{
    fontSize: 16
  },
  nomeAutor:{
    fontSize: 15,
    color: "grey"
  },
  preco:{
    fontSize: 18
  },
  noResults:{
    textAlign: "center"
  }
 

  // touchable: {
  //   backgroundColor: 'blue',
  //   padding: 10,
  // },
  // touchableText: {
  //   color: 'white',
  // },
  // touchablePressed: {
  //   backgroundColor: '#f0f0f0',
  // },
  // touchableTextPressed: {
  //   color: 'black',
  // },
});

export default styles;