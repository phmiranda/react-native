import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class OlaMundo extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Olá: {this.props.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default OlaMundo;
