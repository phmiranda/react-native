import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OlaMundo from "./src/component/OlaMundo";
import Hello from "./src/class/Hello";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testando o reload automático.</Text>
      <Hello nome='Babuíno 1'/>
      <OlaMundo nome='Babuíno 2' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#0101DF',
    alignItems: 'center'
  }
});
