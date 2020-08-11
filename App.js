import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createDrawerNavigator, createStackNavigator} from 'react-navigation';

import OlaMundo from './src/component/OlaMundo';
import OlaMundo2 from './src/component/OlaMundo2';
import Estilo from './src/asset/Estilo';
import DimensaoFixa from './src/component/DimensaoFixa';
import ChecaNumero from "./src/component/ChecaNumero";
import Evento from "./src/component/Evento";
import UsuarioGithub from "./src/component/UsuarioGithub";

const DrawerNavigation = createDrawerNavigator(
    {
        OlaMundo: {
            screen: OlaMundo
        }
    },
    {
        hideStatusBar: true,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#6b52ae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae'
        }
    }
);

const App = createAppContainer(DrawerNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
