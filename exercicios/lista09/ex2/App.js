import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import React from 'react';
import { NavigationAction, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Formulario from './Formulario';
import TelaInicial from './TelaInicial';
import TelaFinal from './TelaFinal';

const Stack = createStackNavigator();


export default class App extends React.Component {



  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='TelaInicial'>
          <Stack.Screen name='Primeira Tela' component={TelaInicial} options={{headerShown: false}} />
          <Stack.Screen name='Tela de Cadastro' component={Formulario} options={{title: "Tela de Cadastro"}} />
          <Stack.Screen name='Tela Final' component={TelaFinal} options={{title: "Tela de Finalização"}} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }

}
