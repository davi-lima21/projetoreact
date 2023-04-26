import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.centralizado}>Esse é outro exemplo de texto</Text>
        <Text style={styles.esquerda}>Com alinhamentos a esquerda</Text>
        <Text style={styles.direita}>Esse mistura os dois!!</Text>
        <Text style={styles.centralizado}>Esse mistura os dois!!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  }
