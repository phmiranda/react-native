import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

export default props =>
    <View>
        {verificaNumeroParOuImpar(props.numero)}
    </View>

function verificaNumeroParOuImpar(numero) {
    return numero % 2 == 0
    ? <Text style={styles.text}>O número é par.</Text>
    : <Text style={styles.text}>O número é ímpar.</Text>
}

const styles = StyleSheet.create({
    container:	{
        flex:	1,
        backgroundColor:	'#fff',
        alignItems:	'center',
        justifyContent:	'center',
    },
    text:	{
        fontSize:	18,
        fontWeight:	'bold'
    }
});
