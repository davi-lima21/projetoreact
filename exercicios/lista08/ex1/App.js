import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import React from 'react';
import styles from './estilo';
export default class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {numero: 2};
    }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>Tabuada do {this.state.numero}</Text>
        <FlatList
        style={ {marginTop: 50}}
        data={[
          {key : `0x${this.state.numero} = ${this.state.numero * 0}`},
          {key : `1x${this.state.numero} = ${this.state.numero * 1}`},
          {key : `2x${this.state.numero} = ${this.state.numero * 2}`},
          {key : `3x${this.state.numero} = ${this.state.numero * 3}`},
          {key : `4x${this.state.numero} = ${this.state.numero * 4}`},
          {key : `5x${this.state.numero} = ${this.state.numero * 5}`},
          {key : `6x${this.state.numero} = ${this.state.numero * 6}`},
          {key : `7x${this.state.numero} = ${this.state.numero * 7}`},
          {key : `8x${this.state.numero} = ${this.state.numero * 8}`},
          {key : `9x${this.state.numero} = ${this.state.numero * 9}`},
          {key : `10x${this.state.numero} = ${this.state.numero * 10}`}
        ]}
        renderItem={ ({item}) =>  
          <Text style={{ fontSize:20}}>{item.key}</Text>
        }
        //
        >

        </FlatList>
        <StatusBar style="auto" />
      </View>

    );
  }

}
