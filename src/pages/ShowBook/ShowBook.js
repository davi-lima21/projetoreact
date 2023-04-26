import React from "react";
import { Text, View, Button, StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";
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

    comprar() {
        this.props.navigation.navigate('FormaPagamento', {
            id: this.props.route.params.id,
            tituloLivro: this.props.route.params.tituloLivro,
            nomeAutor: this.props.route.params.nomeAutor,
            preco: this.props.route.params.preco,
            urlImage: this.props.route.params.urlImage,
            sinopse: this.props.route.params.sinopse
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{
                    height: '100%',
                    width: "100%",
                }} showsVerticalScrollIndicator={false}>
                    <View style={{alignItems: "center"}}>

                        <View>
                            <View style={styles.produtos}>
                                <Image style={styles.livro} source={this.state.urlImage}></Image>
                                <Text style={[styles.tituloLivro, styles.width144]}>{this.state.tituloLivro}</Text>
                                <Text style={[styles.nomeAutor, styles.width144]}>{this.state.nomeAutor}</Text>
                                <Text style={styles.preco}>R$ {this.state.preco}</Text>
                            </View>
                        </View>
                        <View style={styles.containerButtons}>
                            <View style={styles.buttons}>

                                <TouchableOpacity style={styles.buttonComprar} onPress={() => this.comprar()}>
                                    <Text style={styles.textButton1}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttons}>

                                <TouchableOpacity style={styles.buttonCarrinho}>
                                    <Text style={styles.textButton2}>Adicionar ao Carrinho</Text>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.width290}>
                                <Text style={styles.tituloSinopse}>Sinopse</Text>
                                <Text style={styles.sinopse}>
                                    {this.state.sinopse}
                                </Text>

                            </View>
                        </View>
                    </View>
                </ScrollView>
                <StatusBar style="auto" />
            </View>
        );
    }
}