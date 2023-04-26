import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './estilo';

class LoginScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleLoginPress = () => {
    // Aqui você pode adicionar a lógica de login
    console.log('Email:', this.state.email);
    console.log('Senha:', this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default LoginScreen;
