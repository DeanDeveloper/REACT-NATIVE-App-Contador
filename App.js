import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  // Declarando estado
  const [count, setCount] = useState(0);


  // função incrementar
  let increment = () => {
    setCount(count + 1);
  }

  // função decrementar
  let decrement = () => {
    setCount(count - 1);
  }


  return (
    <View style={styles.container}>

      <Text style={styles.numberCount}>{count}</Text>

      <View style={styles.buttonContent}>
        { (count <= 0) ? ("") : ( <TouchableOpacity style={styles.touchButton} onPress={ decrement }><Text style={styles.textButton}>Decrementar (-)</Text></TouchableOpacity> ) } 
        <TouchableOpacity style={styles.touchButton} onPress={ increment }><Text style={styles.textButton}>Incrementar (+)</Text></TouchableOpacity>
      </View>

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

  numberCount: {
    fontSize: 60,
    color: "#8800ff"
  },

  buttonContent: {
    padding: 20,
    flexDirection: 'row',
    marginTop: 20
  },

  touchButton: {
    width: 200,
    padding: 10,
    borderWidth: .4,
    borderRadius: 4,
    borderColor: '#8800ff',
    marginHorizontal: 10
  },

  textButton: {
    textAlign: 'center',
    color: '#8800ff'
  },

});
