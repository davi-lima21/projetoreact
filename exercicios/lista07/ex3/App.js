import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.verde}></View>
          <View style={styles.azul}></View>
          <View style={styles.vermelho}></View>
          <View style={styles.branco}></View>
        </View>
        <View style={styles.container3}>
          <View style={styles.roxo}>
            <View style={styles.amarelo}></View>
          </View> 
        </View>
        <StatusBar style="auto" />
      </View>

    );
  }

}
