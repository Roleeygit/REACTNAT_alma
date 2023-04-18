/**
 * Name: Juhász Roland
 * Group: Szoft II N
 * Date: 2023-04-18
 */


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function calculatePercentage(total, count) 
{
  return ((count / total) * 100).toFixed(2);
}

export default function App() 
{
  const [firstClassApples, setFirstClassApples] = useState(0);
  const [secondClassApples, setSecondClassApples] = useState(0);
  const totalApples = firstClassApples + secondClassApples;
  const firstClassPercentage = calculatePercentage(totalApples, firstClassApples);
  const secondClassPercentage = calculatePercentage(totalApples, secondClassApples);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>almaosztaly</Text>
      <Text style={styles.subheader}>készítette: Juhász Roland (Szoft II N)</Text>
      <TextInput
        style={styles.input}
        placeholder="Első osztályú almák"
        keyboardType="numeric"
        onChangeText={(value) => setFirstClassApples(parseInt(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Másodosztályú almák"
        keyboardType="numeric"
        onChangeText={(value) => setSecondClassApples(parseInt(value))}
      />
      <Text style={styles.result}>Összes kapott almák száma: {totalApples}</Text>
      <Text style={styles.result}>Első osztályú almák százalékban: {firstClassPercentage}%</Text>
      <Text style={styles.result}>Másodosztályú almák százalékban: {secondClassPercentage}%</Text>
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
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    marginVertical: 10,
    fontSize: 16,
  },
});