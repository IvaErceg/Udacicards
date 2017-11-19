import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class DeckDetails extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.deck} deck`,
    });


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.deck.title}</Text>
                <Text style={styles.title}>{this.props.deck.cards}</Text>
                <View>
                    <Button onPressItem={() => navigate('NewCard', {deck: this.props.deck.title})}>Add Card</Button>
                    <Button onPressItem={() => navigate('QuizQuestion',  {deck: this.props.deck.title})}>Start Quiz</Button>
                    <Button onPressItem={() => navigate('CardList', {deck: this.props.deck.title})}>Show Cards</Button>
                </View>
            </View>

        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        deck: state.decks.filter(deck => deck.title === ownProps.navigation.state.params.deck)[0]
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 24,
    }
});

export default connect(mapStateToProps, { addCard })(DeckDetails);
