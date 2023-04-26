import React from "react";
import { Text, View, Button, Image } from "react-native";
import styles from "./estiloTelaInfo";


export default class TelaInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { valor: "Seguir" }
    }

    buttonSeguir() {
        let valor = this.state.valor;
        if (valor == "Seguir") {
            this.setState({ valor: "Deixar de seguir" })
        } else {
            this.setState({ valor: "Seguir" })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerPerfil}>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={{ uri: 'https://media.licdn.com/dms/image/C4D03AQHEdhFqGZaCJA/profile-displayphoto-shrink_200_200/0/1663032803188?e=1686787200&v=beta&t=uE7U1Jf9tPdpjWyUwLWJ5VNyustaMxsoEqBTkKKVMS4', }}
                        />
                    </View>
                    <View style={styles.textPerfil}>
                        <Text style={[styles.bold, styles.nome]}>Davi Lima</Text>
                        <Text>Aluno em IFSC - Lages</Text>
                        <Text>Natural de Lages - SC</Text>
                        <Text>Formado em técnico em informática - CEDUP Renato Ramos,
                            último semestre do curso técnico em informática para internet
                        </Text>
                        <View style={styles.button}>
                            <Button
                                color="green"
                                title={this.state.valor}
                                onPress={() => this.buttonSeguir()}
                            ></Button>
                        </View>
                    </View>
                </View>

                <View style={styles.descricao}>
                    <Text style={styles.bold}>Descrição</Text>
                    <Text style={styles.textDescricao}>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.</Text>
                </View>
            </View>
        );
    }
}