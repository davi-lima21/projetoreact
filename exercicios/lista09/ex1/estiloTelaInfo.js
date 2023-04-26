import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "beige",
    padding: 15
  },
  tinyLogo: {
    width: 140,
    height: 140,
    borderRadius: 8
  },
  bold: {
    fontWeight: "bold",
    fontSize: 19
  },
  containerPerfil:{
    flexDirection: "row",
    maxWidth: 360,
    marginBottom: 10
  },
  textPerfil: {
    marginLeft: 15,
    flexShrink: 1 // permite que o texto quebre em várias linhas
  },
  button:{
    width: 140
  }
});

export default styles;