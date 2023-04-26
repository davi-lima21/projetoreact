import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import React from 'react';
import styles from './estilo';
import Tabuada from './Tabuada';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { valorProps: 1 }
  }

  render() {
    return (
      <View style={styles.container}>

        <Tabuada numero={this.state.valorProps} />

        <View style={styles.containerButtons}>
          {Array.from(Array(11).keys()).map(num => (
            <Button key={num} title={num.toString()} onPress={() => this.setState({ valorProps: num })} />
          ))}
        </View>

        <StatusBar style="auto" />
      </View>

    );
  }

}
