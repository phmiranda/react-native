import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class Evento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.alteraInput = this.alteraInput.bind(this);
    }

    alteraInput(input) {
        this.setState({input});
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={this.alteraInput} value={this.state.input}></TextInput>
                <Text style={styles.font30}>{this.state.input}</Text>
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
    },
    input:	{
        width: 300,
        height: 50,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    },
    font30:	{
        fontSize:	30
    }
});

export default Evento;
