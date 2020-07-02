import React from 'react';
import {Text, View} from 'react-native';

export default function (props) {
    return (
        <View>
            <Text>Olá usuário: {props.nome}</Text>
        </View>
    )
}
