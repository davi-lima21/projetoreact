import React from "react";
import { Text, View, Button, StatusBar, Image, TouchableHighlight, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./estilo";
import { TextInput } from "react-native";


export default class TelaInicial extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            produtos: [
                {
                    id: 1,
                    tituloLivro: "O Projeto de Vida",
                    nomeAutor: "Nome do autor",
                    preco: "19,99",
                    urlImage: require('../../../assets/livro1.jpeg'),
                    sinopse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    genero: ""
                },
                {
                    id: 2,
                    tituloLivro: "O Segredo das Sombras",
                    nomeAutor: "Nome do autor",
                    preco: "50,00",
                    urlImage: require('../../../assets/livro2.webp'),
                    sinopse: "Além de serem perseguidos pela Máfia Russa, Jéssica e seus amigos precisam correr contra o tempo para resgatar Tatiana, a mãe da família lobisomem, mantida refém pela CIA – outra interessada nas habilidades de Pietr e seus irmãos."
                },
                {
                    id: 3,
                    tituloLivro: "O Menino do Dedo Verde",
                    nomeAutor: "Nome do autor",
                    preco: "120,00",
                    urlImage: require('../../../assets/livro3.webp'),
                    sinopse: "O menino do dedo verde é Tistu, um menino que mora na cidade de Mirapólvara com os seus pais: Sr. Papai e Dona Mamãe. E cujo pai é dono de uma fábrica de canhões e consequentemente Tistu herdaria a direção da fábrica quando crescesse. Canhão não é como guarda-chuva, que ninguém quer comprar quando faz sol."
                },
                {
                    id: 4,
                    tituloLivro: "Quarta Capa O Livro Sore Livros",
                    nomeAutor: "Nome do autor",
                    preco: "10,00",
                    urlImage: require('../../../assets/livro4.jpg'),
                    sinopse: "O nosso modo de ler e interpretar o mundo altera-se de maneira constante seguindo o curso do tempo. A tecnologia vem se tornando presença irrefutável nesse intercâmbio entre leitura e narração. O setor livreiro, que há séculos tem no papel a ferramenta de produção de registros, se adapta aos novos leitores. Com tantos dispositivos, lê-se mais. Assim, uma nova questão pode ser colocada: como leitores têm se relacionado com livros e suas histórias? Este livro-reportagem aborda —no impresso, com cheiro, textura, imagens e memórias — relatos sobre hábitos de leitura e o envolvimento das pessoas com seus livros, em um caminho que se inicia em São Paulo, no Brasil, e termina em Buenos Aires, na Argentina, cidade com a maior quantidade de livrarias per capita do mundo. São histórias, diálogos e cenas que se encontram ou se entrecruzam no decorrer da leitura. Quarta Capa visa envolver o leitor nesta teia de relatos traçada com depoimentos coletados em locais públicos, como praças e parques, e intimistas, como moradas e cafés. É, portanto, um livro sobre livros e seus leitores."
                },
                {
                    id: 5,
                    tituloLivro: "Harry Potter e a Criança Amaldiçoada",
                    nomeAutor: "Nome do autor",
                    preco: "25,00",
                    urlImage: require('../../../assets/livro5.webp'),
                    sinopse: "Sempre foi difícil ser Harry Potter e não é mais fácil agora que ele é um sobrecarregado funcionário do Ministério da Magia, marido e pai de três crianças em idade escolar. Enquanto Harry lida com um passado que se recusa a ficar para trás, seu filho mais novo,  Alvo, deve lutar com o peso de um legado de família que ele nunca quis. À medida que passado e presente se fundem de forma ameaçadora, ambos, pai e filho, aprendem uma incômoda verdade: às vezes as trevas vêm de lugares inesperados."
                },
                {
                    id: 6,
                    tituloLivro: "A Menina que Roubava Livros",
                    nomeAutor: "Nome do autor",
                    preco: "100,00",
                    urlImage: require('../../../assets/livro6.webp'),
                    sinopse: "A trajetória de Liesel Meminger é contada por uma narradora mórbida, surpreendentemente simpática. Ao perceber que a pequena ladra de livros lhe escapa, a Morte afeiçoa-se à menina e rastreia suas pegadas de 1939 a 1943. Traços de uma sobrevivente: a mãe comunista, perseguida pelo nazismo, envia Liesel e o irmão para o subúrbio pobre de uma cidade alemã, onde um casal se dispõe a adotá-los por dinheiro. O garoto morre no trajeto e é enterrado por um coveiro que deixa cair um livro na neve. É o primeiro de uma série que a menina vai surrupiar ao longo dos anos. O único vínculo com a família é esta obra, que ela ainda não sabe ler.Assombrada por pesadelos, ela compensa o medo e a solidão das noites com a conivência do pai adotivo, um pintor de parede bonachão que lhe dá lições de leitura. Alfabetizada sob vistas grossas da madrasta, Liesel canaliza urgências para a literatura. Em tempos de livros incendiados, ela os furta, ou os lê na biblioteca do prefeito da cidade.A vida ao redor é a pseudo-realidade criada em torno do culto a Hitler na Segunda Guerra. Ela assiste à eufórica celebração do aniversário do Führer pela vizinhança. Teme a dona da loja da esquina, colaboradora do Terceiro Reich. Faz amizade com um garoto obrigado a integrar a Juventude Hitlerista. E ajuda o pai a esconder no porão um judeu que escreve livros artesanais para contar a sua parte naquela História."
                },
            ],
            searchValue: '',
        }



    }

    handlePress(id, tituloLivro, nomeAutor, preco, urlImage, sinopse) {
        this.props.navigation.navigate('ShowBook', {
            id: id,
            tituloLivro: tituloLivro,
            nomeAutor: nomeAutor,
            preco: preco,
            urlImage: urlImage,
            sinopse: sinopse
        });
    }

    handleSearch(value) {
        this.setState({ searchValue: value });
    }

    clearSearch() {
        this.setState({ searchValue: '' });
    }

    render() {
        const filteredProducts = this.state.produtos.filter(produto =>
            produto.tituloLivro.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
            produto.nomeAutor.toLowerCase().includes(this.state.searchValue.toLowerCase())
        );
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                    <View style={{ alignItems: "center" }}>
                        <Image
                            style={styles.logo}
                            source={require('../../../assets/logo.png')}
                        >
                        </Image>

                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.containerFiltro}>
                            <Text style={[styles.filtros, styles.filtro1]}>TUDO    |    </Text>
                            <Text style={[styles.filtros, styles.filtro2]}>FILTRO 1    |    </Text>
                            <Text style={[styles.filtros, styles.filtro3]}>FILTRO 2</Text>
                        </View>

                        <View style={styles.containerSearch}>
                            <Image
                                style={styles.searchIcon}
                                source={require('../../../assets/search.png')}>
                            </Image>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Pesquisa"
                                value={this.state.searchValue}
                                onChangeText={(value) => this.handleSearch(value)}>
                            </TextInput>
                            {this.state.searchValue ? (
                                <TouchableOpacity onPress={() => this.clearSearch()}>
                                    <Image style={styles.clearIcon} source={require('../../../assets/clear.png')} />
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    </View>
                    <View style={{ width: "100%", alignItems: "center" }}>


                        <View style={[styles.containerProdutos, { justifyContent: "center" }]}>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((produto, index) => (
                                    <TouchableHighlight key={index} underlayColor="#f0f0f0" onPress={() => this.handlePress(produto.id, produto.tituloLivro, produto.nomeAutor, produto.preco, produto.urlImage, produto.sinopse)}>
                                        <View style={styles.produtos}>
                                            <Image style={styles.livro} source={produto.urlImage}></Image>
                                            <Text style={[styles.tituloLivro, styles.width144]}>{produto.tituloLivro}</Text>
                                            <Text style={[styles.nomeAutor, styles.width144]}>{produto.nomeAutor}</Text>
                                            <Text style={styles.preco}>R$ {produto.preco}</Text>
                                        </View>
                                    </TouchableHighlight>
                                ))
                            ) : (
                                <Text style={[styles.noResults]}>Nenhum resultado encontrado.</Text>
                            )}
                        </View>


                    </View>
                </ScrollView>

                <StatusBar style="auto" />
            </View>
        );
    }
}