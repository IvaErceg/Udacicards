import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New Deck!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    flex: 1,
    alignItems: 'center',
  },
});
