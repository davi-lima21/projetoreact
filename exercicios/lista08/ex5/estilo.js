import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: "center",
  },
  formulario: {
    width: '80%',
    marginTop: 50,
    borderRadius: 8,
    // paddingLeft: 20,
    // paddingRight: 20,
    borderColor: '#007b80',
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: 'beige',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,

padding: 6
  },
  containerInputs: {
    padding: 5,
    alignItems: "stretch",
    flexDirection: "row",
    width: '100%'
  },
  inputStyles: {
    marginTop: -5,
    marginLeft: 5,
    borderBottomColor: '#000',
    borderStyle: "solid",
    borderBottomWidth: 1,
    alignItems: "stretch",

  },
  nomeInput: {
    //width: 220
    width: '80%'
  },
  sobrenomeInput: {
    width: '68%'
  },
  idadeInput: {
    //width: 130
  },

  containerIdade: {
    alignContent: "stretch",
    flexDirection: "row"
  },

  containerButtons: {
    margin: 1,
    width: '100%'
  },

  containerLista:{
    width: '80%',
    marginTop: 50,
    borderRadius: 8,
    // paddingLeft: 20,
    // paddingRight: 20,
    borderColor: '#007b80',
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: 'beige',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,

padding: 6
  },
  titulo2:{
    fontSize: 20,
    textAlign: "center",
  },
  dadosLista:{
    margin: 5,
    borderBottomColor: "#007b80",
    borderBottomWidth: 1,
    borderStyle: "solid"
  }
  



});

export default styles;