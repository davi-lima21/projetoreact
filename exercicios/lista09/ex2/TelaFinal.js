import React from "react";
import { Text, View, Button, Image } from "react-native";
//import styles from "./estilo";
import styles from "./estiloTelaFinal";

export default class TelaFinal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nome: this.props.route.params.nome,
            sobrenome: this.props.route.params.sobrenome,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Tchau {this.state.nome} {this.state.sobrenome}</Text>
                <Image
                    style={styles.dino}
                    source={require('./assets/dino3.png')}></Image>
            </View>
        );
    }
}