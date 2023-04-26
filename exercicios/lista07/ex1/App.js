import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.verde}></View>
        <View style={styles.azul}></View>
        <View style={styles.vermelho}></View>
        <View style={styles.branco}></View>
        <StatusBar style="auto" />
      </View>
    );
  }

  }
