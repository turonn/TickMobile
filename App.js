import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';

const App = () => {
  const [games, setGames] = useState([
    
  ])

  return (
    <View style={styles.container}>
      <Header title='Ticketing Application' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
