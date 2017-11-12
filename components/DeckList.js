import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './Deck';


class DeckList extends React.Component {
    state = {
        decks: [{id: 1, title: 'React', cards: 20}, {id: 2, title: 'Redux', cards: 20}, {id: 3, title: 'JavaScript', cards: 20}]
    };
    render() {
        const {decks} = this.state;
        return (
            <View style={styles.container}>
                {decks.map(deck =>  <Deck key={deck.id} title={deck.title} cards={deck.cards}/>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: 'white',
        marginBottom: 15,
        fontSize: 24
    }
  });


export default DeckList;