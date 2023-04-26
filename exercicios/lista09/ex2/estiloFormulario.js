import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#a51b0b",
    padding: 15
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    color: "#000",
    marginRight: 10,
    
  },
  dino:{
    marginTop: 35,
    width: 250,
    height: 250
  }
});

export default styles;