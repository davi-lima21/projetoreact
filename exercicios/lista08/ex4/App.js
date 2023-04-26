import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      idade: "",
      clientes: []
    }

  }

  enviarDados() {
    let nome = this.state.nome;
    let sobrenome = this.state.sobrenome;
    let idade = this.state.idade;

    alert(`Nome: ${nome} \nSobrenome: ${sobrenome} \nIdade: ${idade}`)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo1}>Cadastrar clientes</Text>

        <View style={styles.formulario}>
          <View style={styles.containerInputs}>
            <Text>Nome:</Text>
            <TextInput
              style={[styles.nomeInput, styles.inputStyles]}
              value={this.state.nome}
              onChangeText={(nome) => this.setState({ nome: nome })}></TextInput>
          </View>
          <View style={styles.containerInputs}>
            <Text>Sobrenome:</Text>
            <TextInput
              style={[styles.sobrenomeInput, styles.inputStyles]}
              value={this.state.sobrenome}
              onChangeText={(sobrenome) => this.setState({ sobrenome: sobrenome })}></TextInput>
          </View>

          <View style={styles.containerInputs}>
            <Text>Idade:</Text>
            <TextInput
              style={[styles.idade, styles.inputStyles]}
              value={this.state.idade}
              onChangeText={(idade) => this.setState({ idade: idade })}
              keyboardType='numeric'></TextInput>
          </View>

          <View style={styles.containerButtons}>
            <View style={styles.buttons}>

              <Button title='Enviar' color='#007b80' onPress={() => this.enviarDados()}></Button>
            </View>
            <View style={styles.buttons}>

              <Button color='#007b80' title='Limpar' onPress={() => this.setState({ nome: "", sobrenome: "", idade: "" })}></Button>
            </View>
          </View>

        </View>

        <View style={styles.containerLista}>
          <Text style={styles.titulo2}>Lista de clientes</Text>
          {this.state.clientes.map((cliente, index) => (
            <Text style={styles.dadosLista} key={index}>{cliente.nome} {cliente.sobrenome}, {cliente.idade} anos</Text>
            
          ))}

        </View>

        <StatusBar style="auto" />
      </View>

    );
  }

}
