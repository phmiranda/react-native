import React from 'react';
import {Text, View} from 'react-native';

class Hello extends React.Component {
    render() {
        return(
            <View>
                <Text>Olá: {this.props.nome}</Text>
            </View>
        )
    }
}

export default Hello;
