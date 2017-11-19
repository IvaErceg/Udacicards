import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';

class CardList extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.props.cards.map(card => <Card key={card.question} question={card.question} answer={card.answer}/>)}
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

function mapStateToProps(state, ownProps) {
    return {
        cards: state.decks.filter(deck => deck.title === ownProps.navigation.state.params.deck)[0].questions
    }
}

export default connect(mapStateToProps)(CardList);