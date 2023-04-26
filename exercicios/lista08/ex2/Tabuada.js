import App from "./App";
import { Text, View, TextInput, Button, FlatList, StatusBar } from 'react-native';
import React from 'react';
import styles from './estilo';

export default class Tabuada extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numero: this.props.numero,
            arrayValor: []    
            
        };
        this.calculaArray();
      }

      componentDidMount() {
        
      }
    
      componentDidUpdate(prevProps) {
        if (this.props.numero !== prevProps.numero) {
          this.setState(
            {
              numero: this.props.numero,
              arrayValor: []
            },
            () => {
              this.calculaArray();
            }
          );
        }
      }

      calculaArray(){
        let numero = this.state.numero;
        let arrayValor2 = this.state.arrayValor;
        for(let i = 0; i<= 10; i++){
            let obj = {key: `${i} x ${numero} = ${numero * i}`}
            arrayValor2.push(obj)
        }
        this.setState({arrayValor: arrayValor2})

      }
  
    render() {
      return (
        <View style={styles.container}>
  
          <Text style={styles.titulo}>Tabuada do {this.state.numero}</Text>
          <FlatList
          style={ {marginTop: 50}}
          data={
            this.state.arrayValor
          }
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