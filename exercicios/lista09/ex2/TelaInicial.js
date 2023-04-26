import React from "react";
import { Text, View, Button, Image } from "react-native";
//import styles from "./estilo";
import styles from "./estiloTelaInicial";

export default class TelaInicial extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Seja bem vindo ao Dino App</Text>

                <Image
                    style={styles.dino}
                    source={require('./assets/dino.png')}
                />

                <Button
                color='#000'
                title='PRÓXIMO'
                onPress={() => this.props.navigation.navigate("Tela de Cadastro")}>
                </Button>
            </View>
        );
    }
}