import React from 'react';
import {Text, View} from 'react-native';

export default function (props) {
    return (
        <View>
            <Text>Olá: {props.nome}</Text>
        </View>
    )
}
