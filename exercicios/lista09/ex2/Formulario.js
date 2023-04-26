import React from "react";
import { Text, View, Button, Image, TextInput } from "react-native";
import styles from "./estiloFormulario";


export default class TelaInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            sobrenome: ""
        }
    }

    handleSubmit() {
        let nome = this.state.nome;
        let sobrenome = this.state.sobrenome

        if (nome.length == ""|| sobrenome.length == "") {
            alert("Preencha todos os campos!");
          }else{

              this.props.navigation.navigate('Tela Final', {
                  nome: nome,
                  sobrenome: sobrenome,
              })
          }


    };


    render() {
        return (

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#1A1A1A"
                        onChangeText={(text) => this.setState({ nome: text })}
                        value={this.state.nome}
                        required
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Sobrenome"
                        placeholderTextColor="#1A1A1A"
                        onChangeText={(text) => this.setState({ sobrenome: text })}
                        value={this.state.sobrenome}
                        required
                    />
                </View>
                <Button color="#000" title="Salvar" onPress={() => this.handleSubmit()} />

                <Image
                    style={styles.dino}
                    source={require('./assets/dino2.png')}></Image>
            </View>
        );
    }
}