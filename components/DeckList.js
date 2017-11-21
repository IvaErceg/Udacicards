import React from 'react';
import { StyleSheet, View, FlatList, LayoutAnimation, UIManager, Platform } from 'react-native';
import Deck from './Deck';
import { connect } from 'react-redux';
import { getDecks } from '../actions';
import { removeDeck } from '../actions';
import { style } from 'expo/src/Font';

class DeckList extends React.Component {
    static navigationOptions = {
        header: null,
      };

      constructor() {
        super();
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
      }

      componentWillUpdate(){
        LayoutAnimation.spring();
    }

    componentDidMount() {
        this.props.getDecks();
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.props.decks}
                contentContainerStyle={style.container}
                renderItem={({ item }) => (
                    <Deck
                    removeItem={() => {this.props.removeDeck(deck.id)}}
                    onPressItem={() => navigate('DeckDetails', {deck: deck.title})}
                    title={deck.title} cards={deck.cards}/>)}
                    keyExtractor={item => item.id}
                    >
            </FlatList>)
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

export default connect(mapStateToProps, { getDecks, removeDeck })(DeckList);