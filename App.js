import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import React from 'react';
import { NavigationAction, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShowBook from './src/pages/ShowBook/ShowBook';

import FormaPagamento from './src/pages/FormaPagamento/FormaPagamento';

import TelaInicial from './src/pages/telaInicial/TelaInicial';


const Stack = createStackNavigator();


export default class App extends React.Component {


  render() {
    return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaInicial'>
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{headerShown: false}} />
        <Stack.Screen name='ShowBook' component={ShowBook} options={{title: "Ver Livro"}} />
        <Stack.Screen name='FormaPagamento' component={FormaPagamento} options={{title: "Forma de Pagamento"}} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

}
