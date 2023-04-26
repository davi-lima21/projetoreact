import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.lightGreen}>
            Este é outro exemplo de texto
          </Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.azul}>Com alinhamentos à esquerda</Text>
          <Text style={styles.amarelo}>Com alinhamentos à direita</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.lightGreen}>
            Com alinhamentos centralizado
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>

    );
  }

}
