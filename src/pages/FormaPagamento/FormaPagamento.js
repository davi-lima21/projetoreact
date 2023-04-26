import React from "react";
import { Text, View, Button, ScrollView , StatusBar, Image, TouchableOpacity } from "react-native";
//import styles from "./estilo";
import styles from "./estilo";


export default class ShowBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.route.params.id,
            tituloLivro: this.props.route.params.tituloLivro,
            nomeAutor: this.props.route.params.nomeAutor,
            preco: this.props.route.params.preco,
            urlImage: this.props.route.params.urlImage,
            sinopse: this.props.route.params.sinopse
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tituloFormaPagamento}>Cartão</Text>
                <View style={styles.opcaoPagamento}>

                    <View style={styles.viewImage}>

                        <Image
                            style={styles.imagePagamento}
                            source={require('../../../assets/cartao.png')}>
                        </Image>
                    </View>
                    <Text style={styles.textoOpcao}>
                        Crédito
                    </Text>
                    <Text style={styles.preco}>
                        R$ {this.state.preco}
                    </Text>
                </View>
                <View style={styles.opcaoPagamento}>

                    <View style={styles.viewImage}>

                        <Image
                            style={styles.imagePagamento}
                            source={require('../../../assets/cartao.png')}>
                        </Image>
                    </View>
                    <Text style={styles.textoOpcao}>
                        Débito
                    </Text>
                    <Text style={styles.preco}>
                        R$ {this.state.preco}
                    </Text>
                </View>

                <Text style={styles.tituloFormaPagamento}>Outro(s)</Text>
                
                <View style={styles.opcaoPagamento}>

                    <View style={styles.viewImage}>

                        <Image
                            style={styles.imagePagamento}
                            source={require('../../../assets/pix.png')}>
                        </Image>
                    </View>
                    <Text style={styles.textoOpcao}>
                        PIX
                    </Text>
                    <Text style={styles.preco}>
                        R$ {this.state.preco}
                    </Text>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}