import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

class UsuarioGithub extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dados: {},
            usuario: "octocat"
        }
        this.fetchDados = this.fetchDados.bind(this);
    }

    fetchDados() {
        fetch(`https://api.github.com/users/${this.state.usuario}`)
            .then(response => response.json())
            .then(json => this.setState({dados: json}))
            .catch(err => this.setState({dados: {err}}))
    }

    componentDidMount() {
        this.fetchDados();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{JSON.stringify(this.state.dados)}</Text>
                <View>
                    <TextInput onChangeText={usuario => {this.setState({usuario})}} value={this.state.usuario}></TextInput>
                </View>
                <View>
                    <Button title="Buscar Dados" onPress={this.fetchDados} accessibilithLabel="Buscar dados do usuário no Github"></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:	{
        flex:	1,
        backgroundColor:	'#fff',
        alignItems:	'center',
        justifyContent:	'center',
    }
});

export default UsuarioGithub;
