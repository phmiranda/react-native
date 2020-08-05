import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import OlaMundo from './src/component/OlaMundo';
import OlaMundo2 from './src/component/OlaMundo2';
import Estilo from './src/asset/Estilo';
import DimensaoFixa from './src/component/DimensaoFixa';
import ChecaNumero from "./src/component/ChecaNumero";
import Evento from "./src/component/Evento";
import UsuarioGithub from "./src/component/UsuarioGithub";

const Drawer = createDrawerNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Ola">
                <Drawer.Screen name="Ola" component={OlaMundo}/>
                <Drawer.Screen name="Dimensão" component={DimensaoFixa} />
                <Drawer.Screen name="Github" component={UsuarioGithub}/>
                <Drawer.Screen name="Evento" component={Evento} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
