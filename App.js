import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './src/BottomTabs';
import Header from './src/Header';
import ListProtfolio from './src/ListProtfolio';
import MyStocks from './src/MyStocks';
import Summary from './src/Summary';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Summary/>
      <ListProtfolio/>
      <MyStocks/>
      <BottomTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop:20
  },
});