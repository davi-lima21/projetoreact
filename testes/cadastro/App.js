import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

class CadastroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      dataNascimento: '',
      email: '',
      senha: '',
    };
  }

  cadastrar = () => {
    // Implemente a lógica para enviar os dados de cadastro ao servidor
    console.table('Dados de cadastro: ', this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={this.state.nome}
          onChangeText={(nome) => this.setState({ nome })}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de nascimento (dd/mm/aaaa)"
          value={this.state.dataNascimento}
          onChangeText={(dataNascimento) => this.setState({ dataNascimento })}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={this.state.senha}
          secureTextEntry={true}
          onChangeText={(senha) => this.setState({ senha })}
        />

        <TouchableOpacity style={styles.botao} onPress={this.cadastrar}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
  },
  botao: {
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroScreen;
