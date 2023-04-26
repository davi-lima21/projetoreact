import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.textWhite}>
            Este é outro exemplo de texto
          </Text>
        </View>
        <View style={styles.container3}>
          <View style={styles.black}>
            <Text style={styles.textWhite}>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de</Text>
          </View>
          <View style={styles.amarelo}>

          <Text style={styles.textBlue}>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>

    );
  }

}
