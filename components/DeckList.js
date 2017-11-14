import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Deck from './Deck';
import { connect } from 'react-redux';
import { getDecks } from '../actions';

class DeckList extends React.Component {
    componentDidMount() {
        this.props.getDecks();
    }

    _renderItem = ({ item }) => (
        <Deck {...item} />)

    render() {
        console.log(this.props.decks);
        return (
            <View style={styles.container}>
                this.props.decks.map(deck => <Deck title={deck.title} card={deck.cards}/>)
            </View>)
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

function mapStateToProps(state) {
    return {
        decks: state.decks
    }
}

export default connect(mapStateToProps, { getDecks })(DeckList);