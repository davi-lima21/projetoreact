import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import React from 'react';
import { NavigationAction, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInfo from './TelaInfo';
import TelaInicial from './TelaInicial';

const Stack = createStackNavigator();


export default class App extends React.Component {



  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='TelaInicial'>
          <Stack.Screen name='Primeira Tela' component={TelaInicial} options={{title: "Rede Social IFSC"}} />
          <Stack.Screen name='Segunda Tela' component={TelaInfo} options={{title: "Perfil"}} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }

}
