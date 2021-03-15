import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GameCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.gameCard}>
      <View style={styles.gameCardView}>
        <Text style={styles.gameCardText}>{item.sport}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gameCard: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  gameCardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameCardText: {
    fontSize: 18
  }
});

export default GameCard;