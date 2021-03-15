import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GameCard from './components/GameCard'
import Header from './components/Header';

const App = () => {
  const [games, setGames] = useState([
    {sport: 'No Games', visiting_team: "check internet connection"},
    {sport: 'No Games', visiting_team: "check internet connection"}
  ])
  
  // When I launch the desktop site, I'll be able to pull them this way.
  // useEffect( () => {
  //   fetch('/games.json') 
  //   .then((resp) => resp.json())
  //   .then((data) => setGames([...data]))
  // },[]);

  return (
    <View style={styles.container}>
      <Header title='Ticketing Application' />
      <FlatList
        data={games}
        renderItem={({item}) => <GameCard item={item} />} 
      />
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
