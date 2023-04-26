import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.azulao}>Esse é AZULAO</Text>
        <Text style={styles.vermelhinho}>Esse é vermelhinho!</Text>
        <Text>Esse mistura os dois!! <Text style={styles.azulao}>Azulao</Text> e <Text style={styles.vermelhinho}>vermelhinho!!</Text></Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  }
